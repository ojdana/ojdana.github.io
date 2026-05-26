// ============================================================
// PORTFOLIO DATA — uredi ovdje, radi i lokalno (file://) i na GitHub Pages
// ============================================================

const PROFILE = {
    name: "Danijel Ojdanić",
    title: "Senior .NET Developer",
    subtitle: "ASP.NET Core | Backend Systems | APIs | SQL | 18 godina iskustva",
    location: "Tuzla, BiH",
    email: "d.ojdanic@gmail.com",
    linkedin: "https://www.linkedin.com/in/danijel-ojdani%C4%87-77306786/",
    github: "https://github.com/ojdana",
    summary: "Senior software inženjer s 18 godina iskustva u razvoju web aplikacija i backend sistema baziranih na .NET tehnologijama. Fokus na ASP.NET, REST/SOAP API-jevima, SQL bazama podataka, autentikacijskim sistemima i poslovnim aplikacijama. Iskustvo u rješavanju kompleksnih problema, optimizaciji performansi i izgradnji čistih i održivih rješenja. Radim samostalno i u timovima, koristim Git-based workflow i moderne razvojne prakse. Zainteresovan za remote backend/full-stack saradnju.",
    availableForFreelance: true,
    freelanceNote: "Dostupan za freelance projekte: razvoj web aplikacija, ERP moduli, REST API-jevi, baze podataka, SQL optimizacija, remote saradnja."
};

const EXPERIENCE = [
    {
        company: "Itineris doo Tuzla",
        role: "Senior Software Engineer",
        period: "Sep 2022 — danas",
        current: true,
        description: "Razvoj novog CMS/BPM sistema s više modula za institucije javne uprave i finansijske organizacije.",
        highlights: [
            "Modul za fakturisanje (Invoices) — kompletan workflow od unosa do knjiženja i plaćanja",
            "Praćenje izvršenja budžeta — dashboard i izvještaji s grafičkim prikazima",
            "Praćenje izvršenja ugovora — BPM workflow za upravljanje ugovorima",
            "Loan Lead Management — modul za mikrokreditne institucije (upravljanje leadovima)",
            "Citizen portal — e-Gradjanin samouslužni portal za 94 vrste usluga",
            "Federalne inspekcije i operativni protokol — moduli za javnu upravu",
            "Migracija na moderni stack: ASP.NET Core .NET 9 + React 18 + TypeScript + DevExtreme"
        ],
        tech: ["C#", "ASP.NET MVC", "ASP.NET Core", "SQL Server", "JavaScript", "jQuery", "JSON", "Bootstrap", "DevExpress", "React", "TypeScript", "Azure", "Entity Framework Core", "Playwright"]
    },
    {
        company: "Spin doo Tuzla",
        role: "Senior Software Engineer",
        period: "Sep 2018 — Sep 2022",
        current: false,
        description: "Razvoj modula za postojeći računovodstveni softver (desktop) i samostalnih projekata (desktop i web).",
        highlights: [
            "POS kasa — standalone POS sistem za prodajna mjesta",
            "Stalna sredstva i sitan inventar — evidencija i upravljanje imovinom",
            "Transportna logistika — praćenje i upravljanje prijevozom",
            "Loyalty club — sistem lojalnosti za kupce",
            "Evidencija dolazaka zaposlenika — monitoring ulazaka",
            "SOAP i REST servisi za integraciju različitih modula",
            "Fakturisanje, CRM, DMS, Nekretnine, Web dobavljači (Bingo, Zvorničanka)"
        ],
        tech: ["C#", "SQL Server", "JavaScript", "jQuery", "JSON", "HTML", "CSS", "SOAP", "REST API"]
    },
    {
        company: "Partner MKF",
        role: "Programmer / DBA",
        period: "Feb 2009 — Aug 2018",
        current: false,
        description: "Razvoj softverskih rješenja i administracija Oracle baze podataka u mikrokreditnoj finansijskoj instituciji.",
        highlights: [
            "Administracija Oracle baze: redundancija, sigurnost, monitoring i optimizacija performansi",
            "Razvoj novih aplikacija i unapređenje postojećih poslovnih sistema",
            "Analiza poslovnih procesa s uposlenicima i kreiranje softverskih rješenja",
            "ASP.NET web aplikacije za interne poslovne procese",
            "Razvoj izvještajnih sistema i automatizacija poslovnih tokova"
        ],
        tech: ["Oracle", "ASP.NET", "C#", "SQL", "PL/SQL", "HTML", "JavaScript"]
    }
];

const PROJECTS = [
    {
        title: "ItinerisWEB — CMS/BPM/ERP platforma",
        category: "ERP / Javni sektor",
        type: "commercial",
        description: "Kompleksna poslovna platforma za institucije javne uprave s 14+ aktivnih modula, BPM workflow engineom i AI-asistiranim sustavom pomoći.",
        highlights: [
            "BPM workflow engine koji koordinira sve poslovne procese",
            "14+ integriranih modula (KUF, UGO, PIS, BDG, DMS, CIPS...)",
            "AI-asistiran sistem pomoći (DeepSeek/Gemini/Groq)",
            "Višetematski UI — 9 tema, Navy 2026 dizajn sistem"
        ],
        tech: ["C#", "ASP.NET MVC", "SQL Server", "JavaScript", "Bootstrap", "DevExpress"]
    },
    {
        title: "e-Gradjanin portal — Grad Gradiška",
        category: "E-uprava / Portal",
        type: "commercial",
        description: "Samouslužni online portal za građane Grada Gradiška. Podnošenje zahtjeva, praćenje statusa i preuzimanje dokumenata bez dolaska u šalter.",
        highlights: [
            "94 vrste usluga dostupne online",
            "265+ zahtjeva podneseno u produkciji",
            "Integracija s internim sistemima institucije",
            "Responzivni dizajn za mobilne uređaje"
        ],
        tech: ["HTML", "CSS", "JavaScript", "SQL Server", "Azure SQL"]
    },
    {
        title: "CoreAPI + AdminPortal",
        category: "Modernizacija / React",
        type: "commercial",
        description: "Migracija legacy ASP.NET MVC sistema na moderni stack. Backend: ASP.NET Core .NET 9. Frontend: React 18 + TypeScript + DevExtreme + Vite.",
        highlights: [
            "REST API s JWT autentikacijom i Swagger dokumentacijom",
            "Modularni React frontend s TypeScript type safety",
            "Postepena migracija modul po modul bez downtime-a",
            "EF Core + isti SQL Server kao legacy sistem"
        ],
        tech: ["ASP.NET Core .NET 9", "C#", "React 18", "TypeScript", "Entity Framework Core", "Vite", "JWT"]
    },
    {
        title: "Spinsoft ERP — 23 modula",
        category: "ERP / Maloprodaja",
        type: "commercial",
        description: "Sveobuhvatni ERP sistem za maloprodajne lance u BiH. Pokriva fakturisanje, POS, logistiku, DMS, loyalty programe i web integracije.",
        highlights: [
            "POS sistemi s loyalty programima (gorivo, bonusi, SpinKlub)",
            "Web integracije s Bingo i Zvorničanka maloprodajnim lancima",
            "Logistika i prenosi robe između poslovnica",
            "Samostalna kasa, Vaga, SpinERV, GTM moduli"
        ],
        tech: ["C#", "SQL Server", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "BalegemCMS — ERP za građevinsku firmu",
        category: "Desktop ERP / Građevinarstvo",
        type: "freelance",
        description: "Modularni desktop ERP sistem za upravljanje poslovanjem građevinske firme. Windows Forms aplikacija s 6 funkcionalnih modula.",
        highlights: [
            "Gradilište — evidencija gradilišta, dnevnik rada, obračunske situacije, trebovanje, ponude",
            "Magacin — upravljanje ulazom/izlazom robe, stanjem zaliha i prometom",
            "Proizvodnja — normativ, praćenje procesa proizvodnje, promet materijala",
            "TIM (Tehnika i Mehanizacija) — potrošnja mašina i vozila, iskop, servis, troškovi",
            "Izvještaji — pregledi po gradilištu, materijalu, mehanizaciji",
            "Modularna arhitektura — svaki modul nezavisna biblioteka, zajednička Library osnova"
        ],
        tech: ["C#", "WinForms", "DevExpress", "SQL Server", "Desktop aplikacija"]
    },
    {
        title: "PRO_NALOZI — Štamparija",
        category: "Privatni projekat",
        type: "freelance",
        description: "Sistem za kreiranje i praćenje radnih naloga u štampariji. Privatni freelance projekat s BPM workflow praćenjem statusa.",
        highlights: [
            "Kreiranje i praćenje radnih naloga",
            "BPM workflow za statuse (unesen, u radu, završen)",
            "Izvještavanje i pregled naloga"
        ],
        tech: ["C#", "ASP.NET MVC", "SQL Server", "JavaScript"]
    }
];

const EDUCATION = [
    {
        institution: "Elektrotehnički fakultet",
        degree: "Diplomirani inženjer elektrotehnike",
        field: "Informatika",
        period: "2002 — 2009"
    }
];

const SKILLS = [
    {
        category: "Backend",
        icon: "⚙️",
        skills: [
            { name: "C#", level: 5 },
            { name: "ASP.NET MVC", level: 5 },
            { name: "ASP.NET Core (.NET 9)", level: 4 },
            { name: "Entity Framework Core", level: 4 },
            { name: "REST API dizajn", level: 4 }
        ]
    },
    {
        category: "Baze podataka",
        icon: "🗄️",
        skills: [
            { name: "SQL Server (T-SQL)", level: 5 },
            { name: "Stored procedure & views", level: 5 },
            { name: "Optimizacija upita", level: 4 },
            { name: "Azure SQL", level: 3 }
        ]
    },
    {
        category: "Frontend",
        icon: "🎨",
        skills: [
            { name: "JavaScript / jQuery", level: 5 },
            { name: "HTML5 / CSS3", level: 5 },
            { name: "Bootstrap", level: 5 },
            { name: "React 18", level: 3 },
            { name: "TypeScript", level: 3 }
        ]
    },
    {
        category: "ERP & BPM sistemi",
        icon: "🏗️",
        skills: [
            { name: "BPM workflow dizajn", level: 5 },
            { name: "ERP arhitektura", level: 5 },
            { name: "Fakturisanje sistemi", level: 5 },
            { name: "POS integracije", level: 4 },
            { name: "DMS sistemi", level: 4 }
        ]
    },
    {
        category: "Alati & DevOps",
        icon: "🛠️",
        skills: [
            { name: "Git / GitHub", level: 4 },
            { name: "Visual Studio", level: 5 },
            { name: "Playwright (E2E testovi)", level: 4 },
            { name: "Azure WebJobs", level: 3 },
            { name: "DevExpress", level: 4 }
        ]
    }
];

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function tags(arr) {
    return arr.map(t => `<span class="tag">${t}</span>`).join('');
}

function render() {
    document.getElementById('hero-name').textContent = PROFILE.name;
    document.getElementById('hero-title').textContent = PROFILE.title;
    document.getElementById('hero-sub').textContent = PROFILE.subtitle;
    document.getElementById('about-summary').textContent = PROFILE.summary;
    document.getElementById('about-freelance').textContent = PROFILE.freelanceNote;
    if (!PROFILE.availableForFreelance) {
        document.getElementById('badge-available').style.display = 'none';
    }

    document.getElementById('contact-links').innerHTML = `
        <a href="mailto:${PROFILE.email}" class="contact-link">
            <span class="contact-link-icon">✉</span> ${PROFILE.email}
        </a>
        <a href="${PROFILE.linkedin}" target="_blank" class="contact-link">
            <span class="contact-link-icon">in</span> LinkedIn profil
        </a>
        ${PROFILE.github ? `<a href="${PROFILE.github}" target="_blank" class="contact-link">
            <span class="contact-link-icon">⌥</span> GitHub
        </a>` : ''}
    `;

    document.getElementById('experience-list').innerHTML = EXPERIENCE.map(exp => `
        <div class="timeline-item ${exp.current ? '' : 'past'}">
            <div class="timeline-header">
                <div>
                    <div class="timeline-company">${exp.company}</div>
                    <div class="timeline-role">${exp.role}</div>
                </div>
                <span class="timeline-period">${exp.period}</span>
            </div>
            <p class="timeline-desc">${exp.description}</p>
            <ul class="timeline-highlights">
                ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
            <div class="timeline-tags">${tags(exp.tech)}</div>
        </div>
    `).join('');

    document.getElementById('projects-grid').innerHTML = PROJECTS.map(p => `
        <div class="project-card">
            <div class="project-cat">
                ${p.category}
                ${p.type === 'freelance' ? '<span class="project-type-badge project-type-freelance">Freelance</span>' : ''}
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.description}</p>
            <ul class="project-highlights">
                ${p.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
            <div class="timeline-tags" style="margin-top:auto;padding-top:16px">${tags(p.tech)}</div>
        </div>
    `).join('');

    document.getElementById('skills-grid').innerHTML = SKILLS.map(cat => `
        <div class="skill-category">
            <div class="skill-cat-header">
                <span class="skill-icon">${cat.icon}</span>
                <span class="skill-cat-name">${cat.category}</span>
            </div>
            ${cat.skills.map(s => `
                <div class="skill-item">
                    <div class="skill-name-row"><span class="skill-name">${s.name}</span></div>
                    <div class="skill-bar"><div class="skill-fill" style="width:${s.level * 20}%"></div></div>
                </div>
            `).join('')}
        </div>
    `).join('');

    // Education
    const eduEl = document.getElementById('education-list');
    if (eduEl) {
        eduEl.innerHTML = EDUCATION.map(edu => `
            <div class="edu-card">
                <div class="edu-icon">🎓</div>
                <div class="edu-body">
                    <div class="edu-institution">${edu.institution}</div>
                    <div class="edu-degree">${edu.degree}</div>
                    <div class="edu-field">${edu.field}</div>
                </div>
                <span class="timeline-period">${edu.period}</span>
            </div>
        `).join('');
    }

    document.getElementById('footer-year').textContent = new Date().getFullYear();
}

render();
