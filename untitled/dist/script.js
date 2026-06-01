// ==================== LARGE SCRIPTS DATABASE (from ScriptBlox) ====================

const scripts = [
    // Blox Fruits (Very Popular)
    { id:1, title:"Redz Hub V3", game:"Blox Fruits", desc:"All-in-one autofarm, fruit notifier, raid farm, auto quest.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/RedzHub/BloxFruits/main/RedzHub.lua"))()`, views:245000, free:true },
    { id:2, title:"HoHo Hub", game:"Blox Fruits", desc:"Premium autofarm, race v4, mastery, sea events.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/HoHoHub/HoHo/main/HoHoHub.lua"))()`, views:168000, free:true },
    { id:3, title:"Speed Hub X", game:"Blox Fruits", desc:"Fast autofarm, speed hacks, ESP, auto mastery.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua"))()`, views:112000, free:true },
    { id:4, title:"Vortex Hub", game:"Blox Fruits", desc:"Clean UI, fruit sniper, bounty hunt, auto raid.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/VortexHubOfficial/VortexHub/main/VortexHub.lua"))()`, views:89000, free:true },
    { id:5, title:"Annie Hub", game:"Blox Fruits", desc:"Advanced farming & PvP by 1st Mars.", code:`loadstring(game:HttpGet('https://raw.githubusercontent.com/1st-Mars/Annie/main/1st.lua'))()`, views:76000, free:true },
    { id:6, title:"Alchemy Hub V5", game:"Blox Fruits", desc:"Auto farm, fruit spawner, auto mastery.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/AlchemyHub/Alchemy/main/AlchemyHub.lua"))()`, views:95000, free:true },
    { id:7, title:"HaruHub Keyless", game:"Blox Fruits", desc:"Keyless script with daily updates.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/HaruScripts/HaruHub/main/HaruHub.lua"))()`, views:72000, free:true },
    { id:8, title:"ThunderZ Hub", game:"Blox Fruits", desc:"Fast auto farm + infinite stats.", code:`loadstring(game:HttpGet("https://pastebin.com/raw/ThunderZScript"))()`, views:47000, free:true },

    // Pet Simulator 99
    { id:9, title:"Solix Hub", game:"Pet Simulator 99", desc:"Insane autofarm, infinite speed, egg opening.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/main/solix%20new%20keyui.lua"))()`, views:124000, free:true },
    { id:10, title:"Project Meow", game:"Pet Simulator 99", desc:"Auto farm chests, gems, eggs & upgrades.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/ProjectMeow/ProjectMeow/main/loader.lua"))()`, views:61000, free:true },

    // Arsenal & Others
    { id:11, title:"Arsenal Godmode + Aimbot", game:"Arsenal", desc:"Silent aim, wallbang, ESP, full customization.", code:`loadstring(game:HttpGet("https://example.com/arsenal-godmode.lua"))()`, views:68000, free:false },
    { id:12, title:"Universal ESP + Aimbot", game:"Universal", desc:"Works on most games - clean ESP & aim assist.", code:`loadstring(game:HttpGet("https://example.com/universal-esp.lua"))()`, views:52000, free:true },

    // More Universal / Other Games
    { id:13, title:"PCRBLX Hub", game:"Universal", desc:"Supports 160+ games! Very powerful.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/PCRBLX/PCRBLX-Hub/main/PCRBLX.lua"))()`, views:81000, free:true },
    { id:14, title:"Tethers Hub", game:"Universal", desc:"Massive universal hub.", code:`loadstring(game:HttpGet("https://raw.githubusercontent.com/tethers/tethers-hub/main/loader.lua"))()`, views:34000, free:true },
    { id:15, title:"Zen Hub", game:"Blox Fruits", desc:"Lightweight & highly optimized.", code:`loadstring(game:HttpGet("https://zenhub.example.com/loader.lua"))()`, views:39000, free:true },
    { id:16, title:"Murder Mystery 2 Godmode", game:"Murder Mystery 2", desc:"ESP, silent aim, anti-stab.", code:`loadstring(game:HttpGet("https://mm2.example.com/godmode.lua"))()`, views:28000, free:true },
    { id:17, title:"Blade Ball Auto Parry", game:"Blade Ball", desc:"Auto parry + aimbot.", code:`loadstring(game:HttpGet("https://bladeball.example.com/parry.lua"))()`, views:45000, free:true },
    { id:18, title:"Brookhaven RP Admin", game:"Brookhaven", desc:"Admin commands & trolling.", code:`loadstring(game:HttpGet("https://brookhaven.example.com/admin.lua"))()`, views:32000, free:true },
    { id:19, title:"Adopt Me Auto Farm", game:"Adopt Me", desc:"Auto collect pets & money.", code:`loadstring(game:HttpGet("https://adoptme.example.com/farm.lua"))()`, views:41000, free:true },
    { id:20, title:"Doors Full Auto", game:"Doors", desc:"Auto solve puzzles, ESP, speed.", code:`loadstring(game:HttpGet("https://doors.example.com/fullauto.lua"))()`, views:55000, free:true },
    { id:21, title:"King Legacy Hub", game:"King Legacy", desc:"Auto farm, stats, fruits.", code:`loadstring(game:HttpGet("https://kinglegacy.example.com/hub.lua"))()`, views:38000, free:true },
    { id:22, title:"Phantom Forces Aimbot", game:"Phantom Forces", desc:"Aimbot + ESP + recoil control.", code:`loadstring(game:HttpGet("https://phantomforces.example.com/script.lua"))()`, views:29000, free:false },
    { id:23, title:"Break In 2 Script", game:"Break In 2", desc:"Godmode, auto heal, items.", code:`loadstring(game:HttpGet("https://breakin.example.com/script.lua"))()`, views:26000, free:true },
    { id:24, title:"Da Hood Aimlock", game:"Da Hood", desc:"Aimlock + silent aim.", code:`loadstring(game:HttpGet("https://dahood.example.com/aimlock.lua"))()`, views:47000, free:true },
    { id:25, title:"Counter Blox Aimbot", game:"Counter Blox", desc:"Aimbot + wallhack.", code:`loadstring(game:HttpGet("https://counterblox.example.com/script.lua"))()`, views:31000, free:true },
];

const executors = [
    { id:1, name:"Velocity", icon:"⚡", desc:"Fastest free executor in 2026 with excellent stability.", tags:["Free","Keyless","Fast"], link:"#", paid:false },
    { id:2, name:"Madium", icon:"🌟", desc:"Top tier free executor with amazing performance.", tags:["Free","Popular","Stable"], link:"#", paid:false },
    { id:3, name:"Real Executor", icon:"🔥", desc:"Great UI and strong bypass.", tags:["Free","Keyless"], link:"#", paid:false },
    { id:4, name:"Solara", icon:"☀️", desc:"Very popular free executor with mobile support.", tags:["Free","Mobile"], link:"#", paid:false },
    { id:5, name:"Synapse Z", icon:"💎", desc:"Premium quality paid executor.", tags:["Paid","Level 8"], link:"#", paid:true },
    { id:6, name:"Wave", icon:"🌊", desc:"Strong paid executor with great support.", tags:["Paid","Reliable"], link:"#", paid:true },
    { id:7, name:"Hydrogen", icon:"💧", desc:"Lightweight and beginner friendly.", tags:["Free","Updated"], link:"#", paid:false },
    { id:8, name:"Delta", icon:"△", desc:"Clean interface and easy to use.", tags:["Free","Beginner"], link:"#", paid:false },
    { id:9, name:"Fluxus", icon:"🌊", desc:"Fast and reliable with good mobile version.", tags:["Free","Mobile"], link:"#", paid:false },
    { id:10, name:"Script-Ware", icon:"🛡️", desc:"Premium executor with fast updates.", tags:["Paid","Reliable"], link:"#", paid:true },
];

// ==================== FUNCTIONS (same as before) ====================

function switchTab(id, el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('page-' + id).classList.add('active');
}

function renderScripts(list) {
    const grid = document.getElementById('scriptsGrid');
    grid.innerHTML = list.map(s => `
        <div class="card">
            <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:12px;">
                <div style="font-size:1.15rem; font-weight:700;">${s.title}</div>
                <span style="background:rgba(10,132,255,0.2); color:var(--blue); padding:4px 12px; border-radius:9999px; font-size:0.8rem;">${s.game}</span>
            </div>
            <p style="color:var(--text2); margin-bottom:14px; line-height:1.5;">${s.desc}</p>
            <div style="background:rgba(0,0,0,0.5); padding:12px; border-radius:8px; font-family:'Share Tech Mono',monospace; font-size:0.82rem; margin-bottom:14px; color:#60c0ff; white-space:pre-wrap; overflow:auto; max-height:85px;">${s.code}</div>
            <button class="copy-btn" onclick="copyScript(${s.id})">Copy Script</button>
        </div>
    `).join('');
}

// ... (keep the rest of the functions: renderExecutors, filterScripts, filterExecutors, copyScript, showToast)

function renderExecutors(list) {
    const grid = document.getElementById('executorsGrid');
    grid.innerHTML = list.map(e => `
        <div class="exec-card">
            <div style="display:flex; gap:16px;">
                <div style="font-size:2.8rem; width:70px; height:70px; display:flex; align-items:center; justify-content:center; background:rgba(10,132,255,0.1); border-radius:16px;">${e.icon}</div>
                <div style="flex:1;">
                    <div style="font-size:1.25rem; font-weight:700;">${e.name}</div>
                    <p style="color:var(--text2); margin:8px 0 10px;">${e.desc}</p>
                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px;">${e.tags.map(t => `<span style="background:rgba(10,132,255,0.15); color:var(--blue); padding:4px 10px; border-radius:9999px; font-size:0.78rem;">${t}</span>`).join('')}</div>
                    <a href="${e.link}" style="display:inline-block; padding:10px 28px; background:var(--blue); color:white; border-radius:8px; text-decoration:none; font-weight:600;">Download</a>
                </div>
            </div>
        </div>
    `).join('');
}

function filterScripts() {
    const q = document.getElementById('scriptSearch').value.toLowerCase();
    const f = document.getElementById('scriptFilter').value;
    const filtered = scripts.filter(s => 
        (!f || s.game === f) &&
        (!q || s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q) || s.game.toLowerCase().includes(q))
    );
    renderScripts(filtered);
}

function filterExecutors() {
    const q = document.getElementById('execSearch').value.toLowerCase();
    const filtered = executors.filter(e => 
        !q || e.name.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q)
    );
    renderExecutors(filtered);
}

function copyScript(id) {
    const script = scripts.find(s => s.id === id);
    if (script) {
        navigator.clipboard.writeText(script.code).then(() => {
            showToast("✅ Script copied to clipboard!");
        });
    }
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.style.display = 'flex';
    setTimeout(() => toast.style.display = 'none', 2800);
}

// Initialize
renderScripts(scripts);
renderExecutors(executors);