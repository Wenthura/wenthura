(function () {
  "use strict";

  var KNOWLEDGE = [
    {
      keys: ["hello", "hi", "hey", "good morning", "good afternoon", "start"],
      reply: "Hello! I'm Wenthura's assistant. I can help you explore our products (DoodleNest, Nena AI, AutoFlow), engineering services, or connect you with our team. What are you looking for?"
    },
    {
      keys: ["doodlenest", "preschool", "nursery", "early learning", "daycare"],
      reply: "DoodleNest is our all-in-one preschool management platform — daily operations, parent communication, transport tracking, billing, and early learning LMS in one place. Would you like a demo?",
      action: { label: "View DoodleNest", page: "doodlenest" }
    },
    {
      keys: ["nena", "nena ai", "ai learning", "ai tutor", "education ai", "institution"],
      reply: "Nena AI is our AI-powered learning platform for institutions and students — adaptive study tools, white-label SaaS for schools, smart assessments, and 24/7 AI tutoring. Institutions launch with zero build cost.",
      action: { label: "View Nena AI", page: "nena" }
    },
    {
      keys: ["autoflow", "garage", "automotive", "workshop", "service center", "erp", "vehicle"],
      reply: "AutoFlow is our smart automotive ERP — digital job cards, bay management, inventory, invoicing, and customer visibility for garages and service stations. Most clients see 30%+ efficiency gains.",
      action: { label: "View AutoFlow", page: "autoflow" }
    },
    {
      keys: ["taas", "talent", "hiring", "recruit", "acquisition", "recruitment"],
      reply: "Our Talent Acquisition as a Service (TAaaS) acts as your extended hiring team — sourcing, screening, and delivering pre-vetted technical talent. You pay for results, not effort. Typical time-to-hire: under 3 weeks for senior roles.",
      action: { label: "View Services", page: "services" }
    },
    {
      keys: ["dedicated team", "engineering team", "developers", "outsource", "squads"],
      reply: "Dedicated Team as a Service gives you engineering squads working exclusively on your product — fully integrated, outcome-focused, and scalable. Ideal when you need velocity without the overhead of building a team from scratch.",
      action: { label: "View Services", page: "services" }
    },
    {
      keys: ["product r&d", "product development", "custom software", "build product", "mvp"],
      reply: "Our Product R&D Team covers strategy, engineering, QA, and delivery — taking you from concept to launched product with built-in domain expertise across education, automotive, and enterprise.",
      action: { label: "View Services", page: "services" }
    },
    {
      keys: ["managed services", "infrastructure", "cloud", "devops", "24/7"],
      reply: "Managed Services provides 24/7 cloud and infrastructure operations — monitoring, security, and reliability so your team can focus on product, not ops.",
      action: { label: "View Services", page: "services" }
    },
    {
      keys: ["partner", "fintech", "integration", "partnership"],
      reply: "Partner Solutions delivers fintech, cloud, and automation technology through trusted global partnerships — properly implemented for your business context.",
      action: { label: "View Services", page: "services" }
    },
    {
      keys: ["price", "pricing", "cost", "how much", "quote", "budget"],
      reply: "Pricing depends on your scope — product tier, team size, or service model. Share your requirements and we'll prepare a tailored proposal within 48 hours. No hidden fees."
    },
    {
      keys: ["demo", "walkthrough", "trial", "see it", "show me"],
      reply: "We'd love to show you! Book a discovery call or request a product demo. Our team typically responds within 1 business day.",
      action: { label: "Book a Demo", page: "contact" }
    },
    {
      keys: ["contact", "email", "call", "reach", "talk", "speak", "human", "person"],
      reply: "Reach us at hello@wenthura.lk — we're based in Colombo, Sri Lanka with partners in UAE, Philippines, India, and Cambodia.",
      action: { label: "Contact Us", page: "contact" }
    },
    {
      keys: ["about", "who are you", "company", "wenthura", "story", "history"],
      reply: "Wenthura Solutions has been building intelligent platforms and engineering teams since 2019. We serve 18+ clients with 35+ engineers and 500+ active platform users across education, automotive, and enterprise.",
      action: { label: "About Wenthura", page: "about" }
    },
    {
      keys: ["location", "where", "sri lanka", "colombo", "office"],
      reply: "Our headquarters is in Colombo, Sri Lanka. We also work with regional partners across UAE, Philippines, India, and Cambodia."
    },
    {
      keys: ["thank", "thanks", "great", "helpful", "perfect"],
      reply: "You're welcome! Is there anything else I can help you with — a product, service, or connecting you with our team?"
    }
  ];

  var DEFAULT_REPLY = "I'd be happy to help! You can ask about our products (DoodleNest, Nena AI, AutoFlow), services (talent acquisition, dedicated teams, product R&D), pricing, or how to get in touch with our team.";

  var panel, messages, input, sendBtn, typingEl, toggleBtn, quickWrap, isOpen = false;

  function matchReply(text) {
    var lower = text.toLowerCase().trim();
    if (!lower) return null;
    for (var i = 0; i < KNOWLEDGE.length; i++) {
      var item = KNOWLEDGE[i];
      for (var j = 0; j < item.keys.length; j++) {
        if (lower.indexOf(item.keys[j]) !== -1) return item;
      }
    }
    return { reply: DEFAULT_REPLY };
  }

  function refreshIcons(node) {
    if (typeof window.initIcons === "function") window.initIcons(node);
    else if (window.lucide) lucide.createIcons({ nodes: node || document });
  }

  function scrollMessages() {
    messages.scrollTop = messages.scrollHeight;
  }

  function addMessage(text, type, action) {
    var row = document.createElement("div");
    row.className = "chat-msg-row " + type;

    if (type === "bot") {
      var avatar = document.createElement("div");
      avatar.className = "chat-msg-avatar";
      avatar.innerHTML = '<i data-lucide="sparkles"></i>';
      row.appendChild(avatar);
    }

    var col = document.createElement("div");
    col.className = "chat-msg-col";

    var bubble = document.createElement("div");
    bubble.className = "chat-msg " + type;
    bubble.textContent = text;
    col.appendChild(bubble);

    if (action && type === "bot" && typeof go === "function") {
      var actions = document.createElement("div");
      actions.className = "chat-msg-actions";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chat-action-btn";
      btn.innerHTML = action.label + ' <i data-lucide="arrow-right"></i>';
      btn.onclick = function () {
        go(action.page);
        closeChat();
      };
      actions.appendChild(btn);
      col.appendChild(actions);
    }

    row.appendChild(col);
    messages.appendChild(row);
    refreshIcons(row);
    scrollMessages();
  }

  function showTyping() {
    typingEl = document.createElement("div");
    typingEl.className = "chat-msg-row bot chat-typing-row";
    typingEl.innerHTML =
      '<div class="chat-msg-avatar"><i data-lucide="sparkles"></i></div>' +
      '<div class="chat-typing"><span></span><span></span><span></span></div>';
    messages.appendChild(typingEl);
    refreshIcons(typingEl);
    scrollMessages();
  }

  function hideTyping() {
    if (typingEl && typingEl.parentNode) typingEl.parentNode.removeChild(typingEl);
    typingEl = null;
  }

  function respond(text) {
    addMessage(text, "user");
    if (quickWrap) quickWrap.classList.add("is-hidden");
    showTyping();
    var result = matchReply(text);
    var delay = 600 + Math.min(text.length * 20, 800);
    setTimeout(function () {
      hideTyping();
      if (result) addMessage(result.reply, "bot", result.action);
    }, delay);
  }

  function resizeInput() {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 96) + "px";
    var hasText = input.value.trim().length > 0;
    sendBtn.disabled = !hasText;
    sendBtn.classList.toggle("is-ready", hasText);
  }

  function openChat() {
    isOpen = true;
    panel.classList.add("open");
    toggleBtn.classList.add("open");
    toggleBtn.setAttribute("aria-label", "Close chat");
    document.body.classList.add("chat-open");
    setTimeout(function () { input.focus(); }, 320);
  }

  function closeChat() {
    isOpen = false;
    panel.classList.remove("open");
    toggleBtn.classList.remove("open");
    toggleBtn.setAttribute("aria-label", "Open chat");
    document.body.classList.remove("chat-open");
  }

  function toggleChat() {
    isOpen ? closeChat() : openChat();
  }

  function sendMessage() {
    var text = input.value.trim();
    if (!text) return;
    input.value = "";
    resizeInput();
    respond(text);
  }

  function buildUI() {
    var fab = document.createElement("div");
    fab.className = "chat-fab";
    fab.innerHTML =
      '<div class="chat-panel" id="chatPanel" role="dialog" aria-label="Wenthura Assistant">' +
        '<div class="chat-header">' +
          '<div class="chat-header-glow" aria-hidden="true"></div>' +
          '<div class="chat-header-inner">' +
            '<div class="chat-avatar">' +
              '<span class="chat-avatar-ring" aria-hidden="true"></span>' +
              '<i data-lucide="sparkles"></i>' +
            '</div>' +
            '<div class="chat-header-text">' +
              '<h3>Wenthura Assistant</h3>' +
              '<p><span class="chat-status-dot"></span>Online · Instant replies</p>' +
            '</div>' +
            '<button type="button" class="chat-close" id="chatClose" aria-label="Close chat">' +
              '<i data-lucide="x"></i>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="chat-body">' +
          '<div class="chat-messages" id="chatMessages"></div>' +
        '</div>' +
        '<div class="chat-footer">' +
          '<div class="chat-quick" id="chatQuick">' +
            '<p class="chat-quick-label">Quick topics</p>' +
            '<div class="chat-quick-scroll">' +
              '<button type="button" class="chat-chip" data-q="Tell me about DoodleNest">' +
                '<i data-lucide="palette"></i><span>DoodleNest</span>' +
              '</button>' +
              '<button type="button" class="chat-chip" data-q="What is Nena AI?">' +
                '<i data-lucide="brain-circuit"></i><span>Nena AI</span>' +
              '</button>' +
              '<button type="button" class="chat-chip" data-q="AutoFlow for garages">' +
                '<i data-lucide="wrench"></i><span>AutoFlow</span>' +
              '</button>' +
              '<button type="button" class="chat-chip" data-q="Hiring and talent services">' +
                '<i data-lucide="users"></i><span>Services</span>' +
              '</button>' +
              '<button type="button" class="chat-chip chat-chip-accent" data-q="I want a demo">' +
                '<i data-lucide="calendar"></i><span>Book Demo</span>' +
              '</button>' +
            '</div>' +
          '</div>' +
          '<div class="chat-input-bar">' +
            '<div class="chat-input-shell">' +
              '<textarea class="chat-input" id="chatInput" rows="1" placeholder="Message Wenthura…" aria-label="Message"></textarea>' +
              '<button type="button" class="chat-send" id="chatSend" aria-label="Send message" disabled>' +
                '<i data-lucide="arrow-up"></i>' +
              '</button>' +
            '</div>' +
            '<p class="chat-input-meta"><span>Enter to send</span><span class="chat-input-dot">·</span><span>Shift+Enter for new line</span></p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<button type="button" class="chat-toggle" id="chatToggle" aria-label="Open chat">' +
        '<span class="chat-toggle-icons">' +
          '<i data-lucide="message-circle" class="chat-icon-open"></i>' +
          '<i data-lucide="x" class="chat-icon-close"></i>' +
        '</span>' +
        '<span class="chat-toggle-text">Ask Wenthura</span>' +
      '</button>';

    document.body.appendChild(fab);

    panel = document.getElementById("chatPanel");
    messages = document.getElementById("chatMessages");
    input = document.getElementById("chatInput");
    sendBtn = document.getElementById("chatSend");
    toggleBtn = document.getElementById("chatToggle");
    quickWrap = document.getElementById("chatQuick");

    document.getElementById("chatClose").onclick = closeChat;
    toggleBtn.onclick = toggleChat;
    sendBtn.onclick = sendMessage;

    input.addEventListener("input", resizeInput);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    document.querySelectorAll(".chat-chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        respond(btn.getAttribute("data-q"));
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen) closeChat();
    });

    setTimeout(function () {
      addMessage("Hi there! I'm here to help you explore Wenthura's products, services, and how we can partner with you.", "bot");
    }, 500);

    refreshIcons(fab);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildUI);
  } else {
    buildUI();
  }

  window.WenthuraChat = { open: openChat, close: closeChat };
})();
