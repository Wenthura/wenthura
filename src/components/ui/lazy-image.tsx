'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface LazyImageProps {
	alt: string;
	src: string;
	className?: string;
	AspectRatioClassName?: string;
	/** URL of the fallback image. default: undefined */
	fallback?: string;
	/** The ratio of the image. */
	ratio: number;
	/** Whether the image should only load when it is in view. default: false */
	inView?: boolean;
}

export function LazyImage({
	alt,
	src,
	ratio,
	fallback,
	inView = false,
	className,
	AspectRatioClassName,
}: LazyImageProps) {
	const ref = React.useRef<HTMLDivElement | null>(null);
	const imgRef = React.useRef<HTMLImageElement | null>(null);
	const isInView = useInView(ref, { once: true });

	const [imgSrc, setImgSrc] = React.useState<string | undefined>(
		inView ? undefined : src,
	);
	const [isLoading, setIsLoading] = React.useState(true);
	const [hasError, setHasError] = React.useState(false);

	const handleError = () => {
		if (fallback && imgSrc !== fallback) {
			setImgSrc(fallback);
		} else {
			setHasError(true);
		}
		setIsLoading(false);
	};

	const handleLoad = React.useCallback(() => {
		setIsLoading(false);
		setHasError(false);
	}, []);

	// Load image only when inView
	React.useEffect(() => {
		if (inView && isInView && !imgSrc) {
			setImgSrc(src);
		}
	}, [inView, isInView, src, imgSrc]);

	// Handle cached images instantly
	React.useEffect(() => {
		if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
			handleLoad();
		}
	}, [imgSrc, handleLoad]);

	return (
		<AspectRatio
			ref={ref}
			ratio={ratio}
			className={cn(
				'relative size-full overflow-hidden rounded-2xl border border-slate-200/60',
				AspectRatioClassName,
			)}
		>
			{/* Skeleton / error fallback */}
			<div
				className={cn(
					'absolute inset-0 rounded-2xl bg-slate-100 transition-opacity duration-500 will-change-[opacity]',
					isLoading && 'animate-pulse',
					{ 'opacity-0': !isLoading && !hasError },
				)}
			/>

			{imgSrc && !hasError && (
				<img
					ref={imgRef}
					alt={alt}
					src={imgSrc}
					className={cn(
						'size-full rounded-2xl object-cover opacity-0 transition-opacity duration-700 will-change-[opacity]',
						{
							'opacity-100': !isLoading,
						},
						className,
					)}
					onLoad={handleLoad}
					onError={handleError}
					loading="lazy"
					decoding="async"
					fetchPriority={inView ? 'high' : 'low'}
				/>
			)}
		</AspectRatio>
	);
}
