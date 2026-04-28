window.SiteI18n = (() => {
    // ============================================================
    // 主页：显式 key 翻译表
    // 用于 data-i18n / data-i18n-html / data-i18n-dataset / data-i18n-attr
    // 注意：zh 的值必须保持中文模式原始内容，不要改掉原本夹杂的英文
    // ============================================================
    const i18nData = {
        zh: {
            // 主页 - 顶部导航 / 左侧目录
            nav_academic: "学术 Academic",
            nav_ai: "我与AI AI&Me",
            nav_game: "我与游戏 Games&Me",
            sidebar_about: "关于我 About me",
            sidebar_news: "最近 News",
            sidebar_education: "教育经历 Education",
            sidebar_internships: "实习经历 Internships",
            sidebar_projects: "项目经历 Projects",
            sidebar_interests: "兴趣爱好 Interests",
            sidebar_contact: "联系我 Contact",
            // 主页 - 关于我
            about_title: "关于我 About me",
            about_p1: "我是来自<a href=\"https://www.szu.edu.cn/\" target=\"_blank\" rel=\"noreferrer noopener\">深圳大学</a>管理学院的一名本科生。目前关注的方向包括游戏开发、VR/XR交互应用、AI Agent以及Vibe coding相关领域。我对AI智能体的设计、工作流构建，以及将AI应用于人机交互设计、内容生产与产品场景具有浓厚兴趣。",
            about_p2: "25年6月至9月，我在<a href=\"https://www.hkust-gz.edu.cn/\" target=\"_blank\" rel=\"noreferrer noopener\">香港科技大学(广州)</a>作为访问学生修读暑期课程。25年12月至26年3月，我在<a href=\"https://atoms.dev/\" target=\"_blank\" rel=\"noreferrer noopener\">Atoms</a>实习。26年4月起，我在深圳<a href=\"https://www.q1.com/\" target=\"_blank\" rel=\"noreferrer noopener\">冰川网络</a>3D引擎部，作为游戏技术策划实习生。",
            about_p3: "我正在积极寻求 2027 fall 的 Mphil 项目机会以及27年应届的实习机会，若有意进一步交流，请联系我！",
            // 主页 - 最近动态
            news_title: "最近 News",
            news_more: "more",
            news_less: "less",
            news_2026_4_glacier: "加入深圳市冰川网络实习。",
            news_2026_4_glacier_content: "加入深圳市冰川网络实习。",
            news_2026_4_vret: "参与深大李鹏教授课题组，关于虚拟现实暴露疗法(VRET)的科研项目。",
            news_2026_4_vret_content: "AI+VRET+合作范式+本土化，主要面向社交焦虑障碍(SAD)人群。作为技术负责人，进行Unity VR场景的逻辑搭建、交互设计以及与AI LLM的结合。",
            news_2026_3_apply: "不断地投简历与面试中...",
            news_2026_3_apply_content: "不断地投简历与面试中...",
            news_2026_3_loongclaw: "加入LoongClaw开源组织，参与项目开发。",
            news_2026_3_loongclaw_content: "加入LoongClaw开源组织，参与项目开发。",
            news_2026_3_competition: "参加深圳理工大学AI Agent创新大赛。",
            news_2026_3_competition_content: "参加深圳理工大学AI Agent创新大赛。",
            news_2026_2_website: "搭建个人主页网站。",
            news_2026_2_website_content: "搭建个人主页网站结构，采用极简学术风格与响应式设计。",
            news_2026_2_gamejam: "参加2026中国大学生萌芽GameJam。",
            news_2026_2_gamejam_content: "参加2026中国大学生萌芽GameJam，探索新机制。",
            news_2026_1_ggj: "参加2026 Global GameJam。",
            news_2026_1_ggj_content: "参加2026 Global GameJam，48小时极限开发挑战。",
            // 主页 - 教育经历
            education_title: "教育经历 Education",
            edu_szu_name: "深圳大学 Shenzhen University",
            edu_szu_major: "本科 | 管理学 | 2023 - 2027",
            edu_szu_data_school: "深圳大学 Shenzhen University",
            edu_szu_data_major: "管理学 Management",
            edu_szu_data_desc: "主修工商管理学，辅修人工智能相关课程。",
            edu_hkust_name: "香港科技大学（广州） HKUST(GZ)",
            edu_hkust_major: "暑期访问学生 | 2025.06 - 2025.09",
            edu_hkust_data_school: "香港科技大学（广州） HKUST(GZ)",
            edu_hkust_data_major: "暑期学校 Summer School",
            edu_hkust_data_desc: "暑期学校访问学生，参与跨学科课程学习与学术交流。",
            edu_szhs_name: "深圳市高级中学 Shenzhen Senior High School",
            edu_szhs_major: "中学 | 2017 - 2023",
            edu_szhs_data_school: "深圳市高级中学 Shenzhen Senior High School",
            edu_szhs_data_major: "普通高中 Senior High School",
            edu_szhs_data_desc: "完成初中与高中阶段学业。",
            edu_lixuan_name: "深圳市荔轩小学 Lixuan Primary School",
            edu_lixuan_major: "小学 | 2011 - 2017",
            edu_lixuan_data_school: "深圳市荔轩小学 Lixuan Primary School",
            edu_lixuan_data_major: "小学 Primary School",
            edu_lixuan_data_desc: "特地找到了我小学的校徽，现在学校已经更名重建了，我是最后一批毕业生，特此纪念一下",
            // 主页 - 实习经历
            internships_title: "实习经历 Internships",
            intern_glacier_name: "冰川网络",
            intern_glacier_role: "3D引擎部 实习生 | 2026.4 - NOW",
            intern_glacier_title: "技术策划实习生",
            intern_glacier_data_company: "冰川网络",
            intern_glacier_data_role: "技术策划实习生 Technical Designer Intern",
            intern_glacier_data_time: "2026.4 - NOW",
            intern_glacier_data_desc: "------",
            intern_atoms_name: "Deepwisdom",
            intern_atoms_role: "Intern | 2025.12 - 2026.3",
            intern_atoms_desc: "“Atoms 是一个可以让你‘用一句话启动一家创业公司’的平台。”<br>你只需要有一个想法，输入给 Atoms，它就会召唤出一个智能体团队——包括产品经理、架构师、工程师、测试、数据分析师等——帮你调研、设计、开发、部署一个完整的产品。",
            intern_atoms_data_company: "Deepwisdom",
            intern_atoms_data_role: "实习生 Intern",
            intern_atoms_data_time: "时间段",
            intern_atoms_data_desc: "深度探索与工作。",
            // 主页 - 项目经历
            projects_title: "项目经历 Projects",
            proj_tsinghua_name: "清华深研院Agentland实验室",
            proj_tsinghua_desc: "参加清华大学深圳研究生院Agentland实验室的AI游戏工作坊。",
            proj_tsinghua_data_title: "清华深研院Agentland实验室",
            proj_tsinghua_data_desc: "参加清华大学深圳研究生院Agentland实验室组织的AI游戏工作坊，参与AI Native游戏全流程开发。",
            proj_tencent_camp_name: "腾讯游戏星跃实战营",
            proj_tencent_camp_desc: "参与minigame方向课题，探索AI赋能，拟定方向为 AI Roguelike。",
            proj_tencent_camp_data_title: "2025腾讯游戏星跃实战营",
            proj_tencent_camp_data_role: "Minigame方向课题",
            proj_tencent_camp_data_desc: "参加minigame方向课题“AI助力新人策划抢占未来AI玩法话语权”，拟定方向为AI Roguelike。",
            proj_tencent_camp_data_stack: "AI, Roguelike, 游戏策划",
            proj_tencent_pm_name: "腾讯未来产品经理创造营",
            proj_tencent_pm_desc: "研习产品案例并培养产品结构闭环思维，掌握并实践构建原型的能力。",
            proj_tencent_pm_data_title: "腾讯未来产品经理创造营",
            proj_tencent_pm_data_role: "产品经理研习",
            proj_tencent_pm_data_desc: "研习经典产品案例，学习其在用户洞察、功能迭代及商业化变现的核心方法论。重点关注用户体验设计原则，建立了从“用户需求”到“功能定义”的产品闭环思维。掌握 Axure RP、Figma的基本功能，具备快速构建低保真原型的能力。",
            proj_tencent_pm_data_stack: "Axure RP, Figma, 产品思维, 用户洞察",
            proj_multiagent_name: "Multi-Agent Collaboration Framework",
            proj_multiagent_desc: "基于大语言模型的多智能体协作框架，探索智能体间的通信与任务分发机制。（占位）",
            proj_multiagent_data_title: "Multi-Agent Collaboration Framework",
            proj_multiagent_data_role: "Lead Developer",
            proj_multiagent_data_desc: "Designed and implemented a framework for multi-agent communication and task allocation using LLMs.",
            proj_multiagent_data_stack: "Python, LangChain, OpenAI API",
            // 主页 - 兴趣爱好
            interests_title: "兴趣爱好 Interests",
            interest_games: "电子游戏",
            interest_games_name: "电子游戏 Games",
            interest_games_desc: "热衷于独立游戏开发与机制探索。",
            interest_basketball: "篮球",
            interest_basketball_name: "篮球 Basketball",
            interest_basketball_desc: "学院篮球队成员，享受团队竞技运动的乐趣。",
            interest_music: "音乐",
            interest_music_name: "音乐 Music",
            interest_music_desc: "喜欢听很多类型的音乐。",
            // 主页 - 联系我
            contact_title: "联系我 Contact me",
            // 主页右侧组件 - 技术栈分类
            cat_programming: "编程语言",
            cat_gamedev: "游戏开发",
            cat_agent: "Agent开发",
            cat_prototyping: "原型设计",
            cat_data: "数据分析",
            ue_learning: "UE（学习中）",
            modao: "墨刀",
            // 全局 - 页面标题、按钮 title 和图片 alt
            doc_title: "Kaixin Fan",
            theme_title: "Toggle Theme",
            alt_avatar: "Avatar",
            alt_szu_logo: "深圳大学校徽",
            alt_hkust_logo: "港科广校徽",
            alt_szhs_logo: "深圳高级中学校徽",
            alt_lixuan_logo: "荔轩小学校徽",
            alt_q1_logo: "Company Logo",
            alt_deepwisdom_logo: "Deepwisdom Logo",
            // 主页右侧组件 - 状态卡片
            widget_status_title: "Status",
            widget_status_seeking: "✨ Looking for Summer Internship & Master's Programs",
            widget_status_location: "📍 Shenzhen, China",
            widget_status_cta: "Contact Me ->",
            // 主页右侧组件 - 技术栈卡片
            widget_skills_title: "Tech Stack",
            // 主页右侧组件 - 最近动态卡片
            widget_news_title: "News Overview",
            widget_news_summary: "Updates",
            widget_news_body: "Recent activities and achievements.",
            // 主页右侧组件 - 教育卡片
            widget_education_title: "Education",
            widget_education_summary: "Academic Background",
            widget_education_body: "Shenzhen University (SZU)",
            // 主页右侧组件 - 实习卡片
            widget_internships_title: "Experience",
            widget_internships_summary: "Internships",
            widget_internships_body: "Professional work experience.",
            // 主页右侧组件 - 项目卡片
            widget_projects_title: "Projects",
            widget_projects_summary: "Portfolio",
            widget_projects_body: "Selected works and research.",
            // 主页右侧组件 - 兴趣卡片
            widget_interests_title: "Interests",
            widget_interests_summary: "Hobbies",
            widget_interests_body: "Personal interests and life.",
            // 主页右侧组件 - 联系卡片
            widget_contact_title: "Contact",
            widget_contact_summary: "Get in touch",
            widget_contact_body: "Open for opportunities.",
            // 主页右侧组件 - hover 详情卡片
            widget_news_detail_title: "News Detail",
            widget_project_detail_title: "Project Detail",
            widget_project_link: "View Project ->",
            widget_education_detail_title: "Education Detail",
            widget_internship_detail_title: "Internship Detail",
            widget_interest_detail_title: "Interest Detail",
        },
        en: {
            // 主页 - 顶部导航 / 左侧目录
            nav_academic: "Academic",
            nav_ai: "AI & Me",
            nav_game: "Games & Me",
            sidebar_about: "About me",
            sidebar_news: "News",
            sidebar_education: "Education",
            sidebar_internships: "Internships",
            sidebar_projects: "Projects",
            sidebar_interests: "Interests",
            sidebar_contact: "Contact",
            // 主页 - 关于我
            about_title: "About me",
            about_p1: "I am an undergraduate student at the <a href=\"https://www.szu.edu.cn/\" target=\"_blank\" rel=\"noreferrer noopener\">Shenzhen University</a> School of Management. My current interests include game development, VR/XR interactive applications, AI Agents, and Vibe coding. I have a strong interest in AI agent design, workflow construction, and applying AI to human-computer interaction design, content production, and product scenarios.",
            about_p2: "From June to September 2025, I studied as a visiting student at <a href=\"https://www.hkust-gz.edu.cn/\" target=\"_blank\" rel=\"noreferrer noopener\">HKUST(GZ)</a>. From December 2025 to March 2026, I interned at <a href=\"https://atoms.dev/\" target=\"_blank\" rel=\"noreferrer noopener\">Atoms</a>. Since April 2026, I have been a Game Technical Design Intern in the 3D Engine Department at <a href=\"https://www.q1.com/\" target=\"_blank\" rel=\"noreferrer noopener\">Q1 Network</a> (Shenzhen).",
            about_p3: "I am actively seeking MPhil opportunities for Fall 2027 and internship opportunities for the class of 2027. Please contact me if you are interested in further discussion!",
            // 主页 - 最近动态
            news_title: "News",
            news_more: "more",
            news_less: "less",
            news_2026_4_glacier: "Joined Q1 Network (Shenzhen) as an intern.",
            news_2026_4_glacier_content: "Joined Q1 Network (Shenzhen) as an intern.",
            news_2026_4_vret: "Participated in Prof. Li Peng's research group at SZU on Virtual Reality Exposure Therapy (VRET).",
            news_2026_4_vret_content: "AI + VRET + collaborative paradigm + localization, primarily targeting Social Anxiety Disorder (SAD). As the technical lead, responsible for Unity VR scene logic construction, interaction design, and integration with AI LLMs.",
            news_2026_3_apply: "Continuously applying and interviewing...",
            news_2026_3_apply_content: "Continuously applying and interviewing...",
            news_2026_3_loongclaw: "Joined the LoongClaw open-source organization and participated in project development.",
            news_2026_3_loongclaw_content: "Joined the LoongClaw open-source organization and participated in project development.",
            news_2026_3_competition: "Participated in the SZTU AI Agent Innovation Competition.",
            news_2026_3_competition_content: "Participated in the SZTU AI Agent Innovation Competition.",
            news_2026_2_website: "Built a personal homepage website.",
            news_2026_2_website_content: "Built the personal homepage structure with a minimalist academic style and responsive design.",
            news_2026_2_gamejam: "Participated in the 2026 China University Sprout GameJam.",
            news_2026_2_gamejam_content: "Participated in the 2026 China University Sprout GameJam, exploring new mechanics.",
            news_2026_1_ggj: "Participated in Global GameJam 2026.",
            news_2026_1_ggj_content: "Participated in Global GameJam 2026, a 48-hour game development challenge.",
            // 主页 - 教育经历
            education_title: "Education",
            edu_szu_name: "Shenzhen University",
            edu_szu_major: "Bachelor | Management | 2023 - 2027",
            edu_szu_data_school: "Shenzhen University",
            edu_szu_data_major: "Management",
            edu_szu_data_desc: "Majoring in Business Administration, with additional coursework in artificial intelligence.",
            edu_hkust_name: "HKUST(GZ)",
            edu_hkust_major: "Summer Visiting Student | 2025.06 - 2025.09",
            edu_hkust_data_school: "HKUST(GZ)",
            edu_hkust_data_major: "Summer School",
            edu_hkust_data_desc: "Summer school visiting student, participating in interdisciplinary courses and academic exchanges.",
            edu_szhs_name: "Shenzhen Senior High School",
            edu_szhs_major: "Secondary School | 2017 - 2023",
            edu_szhs_data_school: "Shenzhen Senior High School",
            edu_szhs_data_major: "Senior High School",
            edu_szhs_data_desc: "Completed junior and senior high school education.",
            edu_lixuan_name: "Lixuan Primary School",
            edu_lixuan_major: "Primary School | 2011 - 2017",
            edu_lixuan_data_school: "Lixuan Primary School",
            edu_lixuan_data_major: "Primary School",
            edu_lixuan_data_desc: "I specially found my primary school emblem. The school has since been renamed and rebuilt, and I was among the last graduating class. This is a memento.",
            // 主页 - 实习经历
            internships_title: "Internships",
            intern_glacier_name: "Q1 Network",
            intern_glacier_role: "3D Engine Dept. Intern | 2026.4 - Present",
            intern_glacier_title: "Technical Designer Intern",
            intern_glacier_data_company: "Q1 Network",
            intern_glacier_data_role: "Technical Designer Intern",
            intern_glacier_data_time: "2026.4 - Present",
            intern_glacier_data_desc: "------",
            intern_atoms_name: "Deepwisdom",
            intern_atoms_role: "Intern | 2025.12 - 2026.3",
            intern_atoms_desc: "\"Atoms is a platform that lets you 'launch a startup with one sentence'.\"<br>You just need an idea. Input it to Atoms, and it will summon an agent team — including product managers, architects, engineers, testers, data analysts, etc. — to help you research, design, develop, and deploy a complete product.",
            intern_atoms_data_company: "Deepwisdom",
            intern_atoms_data_role: "Intern",
            intern_atoms_data_time: "Time Period",
            intern_atoms_data_desc: "In-depth exploration and work.",
            // 主页 - 项目经历
            projects_title: "Projects",
            proj_tsinghua_name: "Tsinghua SIGS Agentland Lab",
            proj_tsinghua_desc: "Participated in the AI Game Workshop organized by Tsinghua SIGS Agentland Lab.",
            proj_tsinghua_data_title: "Tsinghua SIGS Agentland Lab",
            proj_tsinghua_data_desc: "Participated in the AI Game Workshop organized by Tsinghua SIGS Agentland Lab, involved in the full-cycle development of AI Native games.",
            proj_tencent_camp_name: "Tencent Game Star Jump Camp",
            proj_tencent_camp_desc: "Participated in the minigame track, exploring AI empowerment with a proposed direction of AI Roguelike.",
            proj_tencent_camp_data_title: "Tencent Game Star Jump Camp",
            proj_tencent_camp_data_role: "Minigame Track",
            proj_tencent_camp_data_desc: "Participated in the minigame track 'AI Helps New Designers Capture Future AI Gameplay Discourse', with a proposed direction of AI Roguelike.",
            proj_tencent_camp_data_stack: "AI, Roguelike, Game Design",
            proj_tencent_pm_name: "Tencent Future PM Camp",
            proj_tencent_pm_desc: "Studied product cases and developed product structure closed-loop thinking, mastered and practiced prototype building skills.",
            proj_tencent_pm_data_title: "Tencent Future PM Camp",
            proj_tencent_pm_data_role: "PM Training",
            proj_tencent_pm_data_desc: "Studied classic product cases, learning core methodologies in user insight, feature iteration, and monetization. Focused on user experience design principles, establishing product closed-loop thinking from 'user needs' to 'feature definition'. Mastered basic functions of Axure RP and Figma, capable of rapidly building low-fidelity prototypes.",
            proj_tencent_pm_data_stack: "Axure RP, Figma, Product Thinking, User Insight",
            proj_multiagent_name: "Multi-Agent Collaboration Framework",
            proj_multiagent_desc: "A multi-agent collaboration framework based on large language models, exploring communication and task distribution mechanisms between agents. (Placeholder)",
            proj_multiagent_data_title: "Multi-Agent Collaboration Framework",
            proj_multiagent_data_role: "Lead Developer",
            proj_multiagent_data_desc: "Designed and implemented a framework for multi-agent communication and task allocation using LLMs.",
            proj_multiagent_data_stack: "Python, LangChain, OpenAI API",
            // 主页 - 兴趣爱好
            interests_title: "Interests",
            interest_games: "Video Games",
            interest_games_name: "Video Games",
            interest_games_desc: "Passionate about indie game development and mechanic exploration.",
            interest_basketball: "Basketball",
            interest_basketball_name: "Basketball",
            interest_basketball_desc: "Member of the college basketball team, enjoying the fun of team sports.",
            interest_music: "Music",
            interest_music_name: "Music",
            interest_music_desc: "Enjoy listening to various types of music.",
            // 主页 - 联系我
            contact_title: "Contact me",
            // 主页右侧组件 - 技术栈分类
            cat_programming: "Programming Languages",
            cat_gamedev: "Game Development",
            cat_agent: "Agent Development",
            cat_prototyping: "Prototyping",
            cat_data: "Data Analysis",
            ue_learning: "UE (Learning)",
            modao: "Modao",
            // 全局 - 页面标题、按钮 title 和图片 alt
            doc_title: "Kaixin Fan",
            theme_title: "Toggle Theme",
            alt_avatar: "Avatar",
            alt_szu_logo: "Shenzhen University logo",
            alt_hkust_logo: "HKUST(GZ) logo",
            alt_szhs_logo: "Shenzhen Senior High School logo",
            alt_lixuan_logo: "Lixuan Primary School logo",
            alt_q1_logo: "Q1 Network logo",
            alt_deepwisdom_logo: "Deepwisdom logo",
            // 主页右侧组件 - 状态卡片
            widget_status_title: "Status",
            widget_status_seeking: "✨ Looking for Summer Internship & Master's Programs",
            widget_status_location: "📍 Shenzhen, China",
            widget_status_cta: "Contact Me ->",
            // 主页右侧组件 - 技术栈卡片
            widget_skills_title: "Tech Stack",
            // 主页右侧组件 - 最近动态卡片
            widget_news_title: "News Overview",
            widget_news_summary: "Updates",
            widget_news_body: "Recent activities and achievements.",
            // 主页右侧组件 - 教育卡片
            widget_education_title: "Education",
            widget_education_summary: "Academic Background",
            widget_education_body: "Shenzhen University (SZU)",
            // 主页右侧组件 - 实习卡片
            widget_internships_title: "Experience",
            widget_internships_summary: "Internships",
            widget_internships_body: "Professional work experience.",
            // 主页右侧组件 - 项目卡片
            widget_projects_title: "Projects",
            widget_projects_summary: "Portfolio",
            widget_projects_body: "Selected works and research.",
            // 主页右侧组件 - 兴趣卡片
            widget_interests_title: "Interests",
            widget_interests_summary: "Hobbies",
            widget_interests_body: "Personal interests and life.",
            // 主页右侧组件 - 联系卡片
            widget_contact_title: "Contact",
            widget_contact_summary: "Get in touch",
            widget_contact_body: "Open for opportunities.",
            // 主页右侧组件 - hover 详情卡片
            widget_news_detail_title: "News Detail",
            widget_project_detail_title: "Project Detail",
            widget_project_link: "View Project ->",
            widget_education_detail_title: "Education Detail",
            widget_internship_detail_title: "Internship Detail",
            widget_interest_detail_title: "Interest Detail",
        }
    };

    // ============================================================
    // 子页面：可见文本精确匹配翻译表
    // 用于没有逐项加 data-i18n 的子页面正文。
    // key 是中文模式原文，value 是英文；中文模式会按 key 还原。
    // ============================================================
    const exactTextMaps = {
        academic: {
            en: {
                // 学术页面 - 占位页
                "\u6211\u4e0e\u5b66\u672f": "Academic & Me",
                "\u2190 \u8fd4\u56de\u4e3b\u9875 Home": "\u2190 Home",
                "Coming soon...": "Coming soon..."
            }
        },
        ai: { en: {} },
        game: { en: {} }
    };

    // ============================================================
    // 子页面：属性文本精确匹配翻译表
    // 用于 data-popup-title / data-popup-desc / title / alt
    // key 是中文模式原始属性值，value 是英文
    // ============================================================
    const exactAttrMaps = {
        ai: { en: {} },
        game: { en: {} }
    };

    // ============================================================
    // AI 页面：可见文本
    // ============================================================
    Object.assign(exactTextMaps.ai.en, {
        // AI 页面 - 顶部标题与学习历程
        "探索多智能体协作、AI 辅助创作与 Vibe Coding 的实践之路。": "Exploring multi-agent collaboration, AI-assisted creation, and Vibe Coding in practice.",
        "学习历程 Learning Journey": "Learning Journey",
        "初识 ChatGPT": "First Encounter with ChatGPT",
        "日常 AI 辅助": "Daily AI Assistance",
        "代码与学习提效": "Coding and Learning Boost",
        "探索 AIGC 生态": "Exploring the AIGC Ecosystem",
        "AI 原理学习": "Learning AI Fundamentals",
        "Vibe Coding 实践": "Vibe Coding Practice",
        "基础 Agent 开发": "Basic Agent Development",
        "AI 公司实习": "AI Company Internship",
        "Multi-Agent 学习": "Multi-Agent Learning",
        "开源项目共建": "Open Source Collaboration",
        // AI 页面 - 左侧导航
        "← 返回主页 Home": "← Home",
        "学习历程 Journey": "Journey",
        "探索与思考 Bookshelf": "Bookshelf",
        "项目展示 Projects": "Projects",
        // AI 页面 - 探索与思考书架
        "探索与思考 Explore & Thoughts": "Explore & Thoughts",
        // AI 页面 - 项目展示
        "一款面向游戏开发的多 Agent 结构化工作台。区别于自由对话，它将大模型整合入工程系统：拥有受控的文件读写能力、项目级工作区隔离、以及清晰的执行状态流转。": "A structured multi-agent workbench for game development. Unlike free-form chat, it embeds LLMs into an engineering system with controlled file access, project-level workspace isolation, and clear execution states.",
        "该系统支持多种输入模态，内部协调design、pm、engineer、review等多个角色 Agent，通过输出标准化工件来驱动项目研发，目前正致力于扩展真实引擎的工程协助。": "The system supports multiple input modalities and coordinates role agents such as design, PM, engineer, and review. It drives development through standardized artifacts and is expanding toward real engine-assisted workflows.",
        "一个基于 Rust 开发的类 OpenClaw 架构的 Agentic OS 内核。作为核心团队成员参与开发，致力于提供极简且强大的智能体系统底层支持。": "An Agentic OS kernel in Rust with an OpenClaw-like architecture. As a core team member, I help build minimal yet powerful low-level support for agent systems.",
        "基于 AOrchestra 论文思想演进的通用 Agent 系统。保留通过四元组动态实例化子智能体的底层编排范式，并致力于将其从学术评测原型转化为生产力工具。": "A general-purpose agent system evolved from the ideas in the AOrchestra paper. It preserves the tuple-based orchestration pattern for dynamically instantiating sub-agents and aims to turn an evaluation prototype into a productivity tool.",
        "系统支持用于日常任务的单体智能体（Single-Agent）模式，以及用于复杂目标的动态多智能体（Dynamic Multi-Agent）协同模式。": "The system supports a single-agent mode for daily tasks and a dynamic multi-agent collaboration mode for complex goals.",
        "实习期间参与开发的 AI 产品。在工业级应用的真实场景下，探索并落地基于大语言模型的提效功能与交互体验。": "An AI product I worked on during my internship, exploring and implementing LLM-powered productivity features and interaction patterns in real industrial scenarios.",
        "基于 Rust 的 Multi-Agent 框架。曾参与社区贡献，提交体验相关的 Issue 与 PR，深入了解了该项目的系统设计与优缺点。": "A Rust-based multi-agent framework. I contributed issues and PRs related to user experience and gained a deeper understanding of its system design, strengths, and tradeoffs.",
        // AI 页面 - 探索与思考书架：卡片标签
        "最近在看": "Recently Reading",
        "GitHub/论文": "GitHub / Paper",
        "论文 · 2023": "Paper · 2023",
        "我对 Multi-Agent 工作流的一些思考": "Some Thoughts on Multi-Agent Workflows",
        "个人文章 · 2025.10": "Personal Article · 2025.10",
        "视频 · YouTube": "Video · YouTube",
        "ZeroClaw项目": "ZeroClaw Project",
        "新手部署指南": "Beginner Deployment Guide",
        "飞书文档 · 2026.2": "Feishu Doc · 2026.2",
        // AI 页面 - 工具栏：分组标题与通用标签
        "工具栏 Toolkit": "Toolkit",
        "💬 对话与思考": "💬 Chat and Thinking",
        "💻 编码与构建": "💻 Coding and Building",
        "🔧 框架与工作流": "🔧 Frameworks and Workflows",
        "🎨 AIGC 创作": "🎨 AIGC Creation",
        "深度使用": "Deep Use",
        "日常使用": "Daily Use",
        "探索中": "Exploring",
        "曾常用": "Former Daily Use",
        "曾试用": "Tried",
        "写作": "Writing",
        "调研": "Research",
        "头脑风暴": "Brainstorming",
        "编码": "Coding",
        "多模态": "Multimodal",
        "论文阅读": "Paper Reading",
        "长文分析": "Long-form Analysis",
        // AI 页面 - 工具栏：对话与思考
        "豆包": "Doubao",
        "日常助手": "Daily Assistant",
        "搜索": "Search",
        "腾讯元宝": "Tencent Yuanbao",
        "日常问答": "Daily Q&A",
        "智谱清言": "Zhipu Qingyan",
        "学术": "Academic",
        "中文对话": "Chinese Chat",
        "实时信息": "Real-time Information",
        "创意": "Creativity",
        "通义千问": "Tongyi Qianwen",
        "中文理解": "Chinese Understanding",
        "推理": "Reasoning",
        "开源": "Open Source",
        // AI 页面 - 工具栏：编码与构建
        "重构": "Refactoring",
        "调试": "Debugging",
        "补全": "Completion",
        "代码生成": "Code Generation",
        "开发环境": "Development Environment",
        "智能对话": "Intelligent Chat",
        "编码助手": "Coding Assistant",
        "多智能体": "Multi-Agent",
        "自动化": "Automation",
        "长上下文": "Long Context",
        "项目级理解": "Project-level Understanding",
        "安全严密": "Safe and Rigorous",
        "逻辑推理": "Logical Reasoning",
        // AI 页面 - 工具栏：框架与工作流
        "工作流": "Workflow",
        "状态机": "State Machine",
        "图编排": "Graph Orchestration",
        "角色协作": "Role Collaboration",
        "轻量级": "Lightweight",
        "高效": "Efficient",
        "强类型": "Strong Typing",
        "数据验证": "Data Validation",
        "Bot 开发": "Bot Development",
        "可视化编排": "Visual Orchestration",
        "应用开发": "App Development",
        // AI 页面 - 工具栏：AIGC 创作
        "文生图": "Text-to-Image",
        "图像编辑": "Image Editing",
        "音乐生成": "Music Generation",
        "音效": "Sound Effects",
        "腾讯混元3D": "Tencent Hunyuan 3D",
        "3D生成": "3D Generation",
        "模型构建": "Model Building",
        "视频生成": "Video Generation",
        "物理模拟": "Physics Simulation",
        "图像生成": "Image Generation",
        "精确编辑": "Precise Editing",
        "AI绘画": "AI Art",
        "艺术创作": "Art Creation",
        "开源模型": "Open-source Model",
        "精准控制": "Precise Control",
        "音效生成": "SFX Generation",
        "音频创作": "Audio Creation",
        // AI 页面 - 工具栏：工具说明
        "日常问答与写作的主力工具，擅长头脑风暴和快速原型设计。": "My main tool for daily Q&A and writing, especially useful for brainstorming and rapid prototyping.",
        "多模态能力强，配合 Vibe Coding 构建本站的核心搭档。": "A strong multimodal model and a core partner for building this site through Vibe Coding.",
        "超长上下文处理能力突出，适合论文阅读和长文档分析。": "Strong long-context capability, well suited to paper reading and long document analysis.",
        "字节跳动推出的 AI 助手，集成搜索和多模态能力，适合日常使用。": "ByteDance's AI assistant, integrating search and multimodal capabilities for daily use.",
        "腾讯混元大模型驱动，结合微信生态，日常问答体验流畅。": "Powered by Tencent Hunyuan and integrated with the WeChat ecosystem for smooth daily Q&A.",
        "智谱 AI 的 GLM 系列模型，学术背景深厚，中文对话质量高。": "Zhipu AI's GLM model family, with strong academic roots and high-quality Chinese dialogue.",
        "xAI 推出的对话模型，风格直接，擅长实时信息获取和创意对话。": "A conversational model from xAI, direct in style and useful for real-time information and creative dialogue.",
        "阿里通义大模型，中文能力优秀，支持多模态理解和生成。": "Alibaba's Tongyi model family, strong in Chinese and capable of multimodal understanding and generation.",
        "开源大模型新势力，推理能力突出，性价比极高。": "A rising open-source model family with strong reasoning and excellent cost performance.",
        "代码辅助编写的核心工具，支持上下文感知的智能补全与重构。": "A core coding assistant with context-aware completion and refactoring.",
        "嵌入 IDE 的编码助手，对常规代码模式的补全非常高效。": "An IDE-embedded coding assistant that is highly efficient for common code patterns.",
        "主力集成开发环境，拥有强大的生态系统和 AI 插件支持。": "My main IDE, with a strong ecosystem and AI plugin support.",
        "字节跳动推出的 AI IDE，集成智能对话和自动编码能力。": "ByteDance's AI IDE with integrated chat and automatic coding capabilities.",
        "智能代码助手，帮助解决编码难题与快速重构代码。": "An intelligent coding assistant for solving coding problems and rapidly refactoring code.",
        "高级智能体编程助手，支持系统级操作和多步复杂推理。": "An advanced agentic coding assistant supporting system-level operations and multi-step reasoning.",
        "自然语言转代码的先驱能力模型，通过 API 支持丰富的自动化任务。": "A pioneering natural-language-to-code model supporting rich automation through APIs.",
        "Moonshot 推出的智能编码工具，支持超长上下文的项目级理解与重构。": "Moonshot's intelligent coding tool, supporting long-context project understanding and refactoring.",
        "提供高效且安全的智能代码生成能力，注重逻辑严密性与准确性。": "Provides efficient and safe intelligent code generation with an emphasis on rigor and accuracy.",
        "Agent 开发框架，用于构建基于 LLM 的自动化工作流和工具链。": "An agent development framework for building LLM-based automated workflows and toolchains.",
        "基于图结构的多智能体编排框架，用于构建复杂且可控的状态循环工作流。": "A graph-based multi-agent orchestration framework for complex and controllable stateful workflows.",
        "多智能体协作框架，专注于基于角色的 Agent 协同与任务分配。": "A multi-agent collaboration framework focused on role-based coordination and task allocation.",
        "轻量级、快速的 Agent 构建框架，专注于用极简代码实现强大功能。": "A lightweight, fast agent framework focused on powerful features with minimal code.",
        "基于 Pydantic 的强类型代理框架，专注于数据验证和生产级可靠性。": "A strongly typed agent framework based on Pydantic, focused on validation and production reliability.",
        "新一代 AI Bot 开发平台，通过强大的可视化工作流和插件生态快速搭建智能体。": "A next-generation AI bot platform for quickly building agents with visual workflows and plugins.",
        "开源的 LLM 应用开发平台，提供直观的 Prompt 编排与 RAG 引擎。": "An open-source LLM app platform with intuitive prompt orchestration and a RAG engine.",
        "节点式 AI 图像生成工作流，探索文生图和图像编辑的可能性。": "A node-based AI image workflow for exploring text-to-image and image editing.",
        "AI 音乐生成工具，探索文字驱动音频创作的可能性。": "An AI music generation tool for exploring text-driven audio creation.",
        "腾讯推出的 3D 资产生成模型，支持文本和图像到 3D 模型的快速生成。": "Tencent's 3D asset generation model, supporting text/image-to-3D generation.",
        "字节跳动研发的先进 AI 视频生成模型，支持高质量的电影级多模态视频创作。": "ByteDance's advanced AI video model for high-quality cinematic multimodal video creation.",
        "OpenAI 革命性的视频生成模型，能基于文本指令创造逼真且富有想象力的场景。": "OpenAI's video generation model for realistic and imaginative scenes from text prompts.",
        "基于高级大模型（如 Gemini）的图像生成与编辑工具，支持高度一致性创作。": "An image generation and editing tool based on advanced models such as Gemini, supporting consistent creation.",
        "行业顶尖的 AI 绘画工具，擅长极具艺术感和想象力的风格化图像创作。": "A leading AI art tool for imaginative and highly stylized image creation.",
        "开源图像生成模型，结合 ControlNet 等插件可实现极高自由度的精准控制。": "An open-source image model that enables highly controllable generation with tools like ControlNet.",
        "AI 音效生成工具平台，通过文本描述快速生成各种影视和游戏级环境拟音。": "An AI SFX platform for quickly generating film- and game-grade environmental sounds from text."
    });

    // ============================================================
    // AI 页面：悬停弹窗与属性文本
    // ============================================================
    Object.assign(exactAttrMaps.ai.en, {
        // AI 页面属性 - 学习历程时间线弹窗
        "初识 ChatGPT": "First Encounter with ChatGPT",
        "日常 AI 辅助": "Daily AI Assistance",
        "高强度提效": "High-intensity Productivity Boost",
        "探索 AIGC 生态": "Exploring the AIGC Ecosystem",
        "探究基础原理": "Studying Fundamentals",
        "Vibe Coding 实践": "Vibe Coding Practice",
        "Agent 开发启蒙": "Agent Development Beginnings",
        "AI 行业实习": "AI Industry Internship",
        "Multi-Agent 进阶": "Advanced Multi-Agent Learning",
        "开源社区贡献": "Open Source Community Contribution",
        // AI 页面属性 - 学习历程时间线详情
        "首次了解到 ChatGPT 及其背后的生成式 AI 技术，感受到语言模型带来的震撼与潜力，开启了 AI 领域的关注。": "My first encounter with ChatGPT and the generative AI technology behind it, which revealed the impact and potential of language models.",
        "开始频繁使用 Kimi、智谱清言等国内优秀大模型工具，深度辅助日常学习、文献阅读与资料查阅。": "Started frequently using Chinese LLM tools such as Kimi and Zhipu Qingyan to support study, paper reading, and research.",
        "开始高强度使用腾讯元宝、DeepSeek 等工具辅助代码编写和计算机课程学习，极大提升了学习与开发效率。": "Started using Tencent Yuanbao, DeepSeek, and other tools intensively for coding and CS coursework, greatly improving learning and development efficiency.",
        "视野拓宽，开始广泛尝试并使用丰富的国外 AI 工具，深入体验包括 AI 生图（如 ComfyUI、Midjourney）在内的多模态创作生态。": "Expanded my view by trying many international AI tools and exploring multimodal creation, including image generation tools such as ComfyUI and Midjourney.",
        "利用暑假系统学习 AI 的基础原理课程，从知其然到知其所以然，构建扎实的理论基础。": "Used the summer to systematically study AI fundamentals and build a stronger theoretical foundation.",
        "开始常用 AI 驱动的 IDE（如 Cursor）进行 Vibe Coding，实现自然语言编程。自主开发了首个专属 AI 助手应用。": "Started using AI-powered IDEs such as Cursor for Vibe Coding and built my first personal AI assistant app.",
        "深入学习 Agent 基础知识与开发逻辑，利用 LangChain 框架成功开发了一个具备基础能力的通用对话 Agent。": "Studied agent fundamentals and development logic, then built a basic general-purpose conversational agent with LangChain.",
        "正式进入 AI 公司实习，接触工业级应用场景，将个人探索与行业实践紧密结合。": "Started an internship at an AI company, connecting personal exploration with real industrial application scenarios.",
        "进阶学习多智能体（Multi-Agent）开发，系统研究并实践了 LangGraph、Pydantic AI、Agno、CrewAI 等前沿框架。": "Advanced into multi-agent development and systematically studied frameworks such as LangGraph, Pydantic AI, Agno, and CrewAI.",
        "开始参与 OpenClaw 等类 Agent 架构的开源项目开发，深入核心调度逻辑，与社区共同推动开源智能体生态。": "Started contributing to OpenClaw-like open-source agent architecture projects, working on core scheduling logic and the open agent ecosystem.",
        // AI 页面属性 - 探索与思考书架弹窗
        "《Virtual Reality-Based Exposure With 360° Environments for Social Anxiety Disorder: Usability and Feasibility Study》(2024)。该研究开发了带分支逻辑的 VR 社交暴露场景，并通过小样本验证了系统诱发焦虑的有效性与可用性。": "\"Virtual Reality-Based Exposure With 360° Environments for Social Anxiety Disorder: Usability and Feasibility Study\" (2024). This study built VR social exposure scenes with branching logic and used a small-sample study to validate the system's anxiety induction, usability, and feasibility.",
        "AOrchestra 提出了一种多智能体编排新范式。它打破了传统子智能体上下文隔离或固定角色的限制，将其抽象为 ⟨指令, 上下文, 工具, 模型⟩ 的四元组配置单元。这使得中心编排器可以将执行与编排解耦，在运行时动态分发子任务，不仅能精细定制子智能体，还能主动控制上下文共享以缓解长文本衰减，在性能与成本之间做出最优权衡。": "AOrchestra proposes a new multi-agent orchestration paradigm. It moves beyond traditional context-isolated or fixed-role sub-agents by representing each sub-agent as a tuple of instruction, context, tools, and model. This lets the central orchestrator decouple execution from orchestration, dynamically dispatch subtasks at runtime, customize sub-agents precisely, and control context sharing to mitigate long-context degradation while balancing performance and cost.",
        "由 Nous Research 开源的自我进化 AI Agent 框架。具有内置的学习循环，能够从经验中创建和优化技能，主动记忆对话历史，并随着使用不断加深对用户的理解。": "An open-source self-evolving AI agent framework from Nous Research. It includes a built-in learning loop that can create and optimize skills from experience, proactively remember conversation history, and deepen its understanding of the user over time.",
        "将 Reasoning (CoT) 和 Acting 结合的范式。这是目前大多数大模型 Agent 思考逻辑的基石。": "A paradigm that combines reasoning (CoT) with acting. It is one of the foundations of how many LLM agents reason and interact with tools.",
        "深度分析 Multi-Agent 的协作模式，探讨如何让多个不同职能的 Agent 在同一个上下文中高效工作。": "A deep analysis of multi-agent collaboration patterns, exploring how agents with different roles can work efficiently within the same context.",
        "Karpathy 的 LLM 入门神作。虽然只有一小时，但把从 Tokenization 到 RLHF 的过程讲得极其透彻。强烈推荐！": "Karpathy's excellent introduction to LLMs. In just one hour, it clearly explains the path from tokenization to RLHF. Highly recommended.",
        "这是我自发为 ZeroClaw 项目编写的部署指南。旨在刚接触Rust和AI Agent的新手快速上手，目前已被官方中国社区微信群置顶❤。": "A deployment guide I wrote for the ZeroClaw project. It is designed to help beginners who are new to Rust and AI agents get started quickly, and it has been pinned in the official Chinese community WeChat group.",
        "点击进入": "Open",
        "💡 点击进入": "💡 Open"
    });

    // ============================================================
    // 游戏页面：可见文本
    // ============================================================
    Object.assign(exactTextMaps.game.en, {
        // 游戏页面 - 顶部标题与游戏历程
        "游戏玩家与游戏开发者的双重视角，记录我与游戏的故事。": "A dual perspective as both player and game developer, documenting my story with games.",
        "我的 Bilibili 频道": "My Bilibili Channel",
        "游戏历程 Gaming Journey": "Gaming Journey",
        "童年": "Childhood",
        "初识游戏": "First Games",
        "独立游戏启蒙": "Indie Game Inspiration",
        "学习 Unity": "Learning Unity",
        "萌芽 GameJam": "Sprout GameJam",
        // 游戏页面 - 左侧导航
        "← 返回主页 Home": "← Home",
        "游戏历程 Journey": "Journey",
        "游戏项目 Games": "Games",
        "拆解与感想 Writings": "Writings",
        "相关实践 Experiences": "Experiences",
        // 游戏页面 - 游戏项目
        "游戏项目 My Games": "My Games",
        "点阵武装 Dot Arsenal": "Dot Arsenal",
        "个人独立开发项目 (2025)": "Solo indie project (2025)",
        "生活需要点缀 Dot Life": "Dot Life",
        "3D益智解谜": "3D Puzzle",
        "萌芽GameJam 参赛作品": "Sprout GameJam Entry",
        "爷爷的面具去哪了": "Where Did Grandpa's Mask Go?",
        "2D能力锁轻战斗闯关": "2D ability-gated light combat platformer",
        "2026 GGJ 作品": "2026 GGJ Entry",
        "闪忆 Flash Memory": "Flash Memory",
        "校内GameJam作品": "Campus GameJam Entry",
        "2D Roguelite 动作游戏，核心系统包括：": "A 2D roguelite action game with core systems including:",
        "5×5 点阵武器合成系统": "5x5 Dot-matrix Weapon Synthesis System",
        "统合武器控制框架": "Unified Weapon Control Framework",
        "集成 Spine 的智能 AI": "Spine-integrated Intelligent AI",
        "程序化地牢与房间管理": "Procedural Dungeon and Room Management",
        "协程驱动的 Buff 系统": "Coroutine-driven Buff System",
        "Global GameJam 2026 作品（占位）": "Global GameJam 2026 Entry (Placeholder)",
        "3D 益智解谜游戏，核心系统包括：": "A 3D puzzle game with core systems including:",
        "空间绘图交互": "Spatial Drawing Interaction",
        "平滑的3D 3C系统设计": "Smooth 3D 3C System Design",
        "室内桌面场景搭建与环境叙事": "Indoor Desktop Scene Building and Environmental Storytelling",
        "解耦式事件驱动架构": "Decoupled Event-driven Architecture",
        "这里是第三个游戏项目的详细描述占位符。": "Placeholder description for the third game project.",
        "游戏项目占位 4 详细说明": "Game Project Placeholder 4 Details",
        "这里是第四个游戏项目的详细描述占位符。": "Placeholder description for the fourth game project.",
        // 游戏页面 - 拆解与感想书架
        "《崩坏：星穹铁道》战斗数值分析": "Honkai: Star Rail Combat Numbers Analysis",
        "拆解案 · 2026": "Analysis · 2026",
        "《PEAK》拆解案": "PEAK Design Analysis",
        "飞书文档 · 最新": "Feishu Doc · Latest",
        "某游戏体验感想占位": "Game Experience Notes Placeholder",
        "感想 · 2026": "Notes · 2026",
        "关于 Roguelike 设计的思考": "Thoughts on Roguelike Design",
        // 游戏页面 - 相关实践
        "BIG独立游戏展志愿者": "BIG Indie Game Expo Volunteer",
        "协助展会现场管理与独立游戏开发者交流 · 2025": "Helped with on-site operations and indie developer communication · 2025",
        "腾讯游戏策划训练营": "Tencent Game Design Training Camp",
        "参与游戏策划与开发实训 · 2025": "Game design and development training · 2025",
        "48小时极限游戏开发挑战 · 2026.01": "48-hour game development challenge · 2026.01",
        "中国大学生萌芽 GameJam 2026": "China University Sprout GameJam 2026",
        "大学生游戏开发竞赛 · 2026.02": "University game development competition · 2026.02",
        // 游戏页面 - 玩家档案
        "玩家档案 Gamer Profile": "Gamer Profile",
        "🖥️ 游戏平台": "🖥️ Platforms",
        "📊 游戏偏好": "📊 Preferences",
        "叙事驱动": "Narrative-driven",
        "独立游戏": "Indie Games",
        "🔥 最近在玩": "🔥 Recently Playing",
        "🎮 洛克王国：世界": "🎮 Roco Kingdom: World",
        "🎮 明日方舟：终末地": "🎮 Arknights: Endfield",
        "❤️ 最爱游戏": "❤️ Favorites",
        "巫师3：狂猎": "The Witcher 3: Wild Hunt",
        "\"单机游戏启蒙作\"": "\"My gateway into single-player games\"",
        "生化危机系列": "Resident Evil Series",
        "\"耐玩的生存恐怖，群像式的叙事\"": "\"Replayable survival horror with ensemble storytelling\"",
        "寂静岭2": "Silent Hill 2",
        "\"心理恐怖，也是心理疗愈\"": "\"Psychological horror, and psychological healing\"",
        "死亡搁浅": "Death Stranding",
        "\"和世界，和他人建立联系\"": "\"Connecting with the world and with others\"",
        "艾尔登法环": "Elden Ring",
        "\"玩了好几百个小时\"": "\"Played for hundreds of hours\"",
        "彩虹六号：围攻": "Rainbow Six Siege",
        "\"心中最好的fps，战术性娱乐性兼具\"": "\"My favorite FPS, both tactical and fun\""
    });

    // ============================================================
    // 游戏页面：悬停弹窗与属性文本
    // ============================================================
    Object.assign(exactAttrMaps.game.en, {
        // 游戏页面属性 - 游戏历程时间线弹窗
        "初识游戏": "First Games",
        "独立游戏启蒙": "Indie Game Inspiration",
        "开始学习 Unity": "Started Learning Unity",
        "萌芽 GameJam 2026": "Sprout GameJam 2026",
        // 游戏页面属性 - 游戏历程时间线详情
        "第一次接触电子游戏，从此打开了一个全新的世界。": "My first encounter with video games opened up a new world.",
        "接触到独立游戏，被小团队创造出的独特体验深深打动，萌生了自己做游戏的念头。": "Indie games moved me with unique experiences created by small teams and inspired me to make games myself.",
        "正式开始学习 Unity 引擎和 C# 编程，迈出游戏开发的第一步。": "Started formally learning Unity and C#, taking my first step into game development.",
        "参加 Global GameJam，48 小时极限开发，完成了第一个完整的游戏作品。": "Joined Global GameJam and completed my first full game in a 48-hour development challenge.",
        "参加中国大学生萌芽 GameJam，继续探索游戏设计的更多可能。": "Joined China University Sprout GameJam and continued exploring more game design possibilities.",
        // 游戏页面属性 - 拆解与感想书架弹窗
        "深度拆解《崩坏：星穹铁道》的战斗机制与数值模型，包含伤害乘区公式、行动条（Action Value）机制计算及角色收益分析。": "A deep analysis of Honkai: Star Rail's combat mechanics and numeric model, including damage multiplier formulas, Action Value calculations, and character value analysis.",
        "深度拆解《PEAK》的核心玩法、系统架构与交互细节，结合实际游戏体验，探讨其核心设计理念与改进空间。": "A deep analysis of PEAK's core gameplay, system architecture, and interaction details, discussing design ideas and room for improvement.",
        "记录了一些最近游玩高口碑独立游戏的感受，关于游戏叙事与玩法的有机结合。": "Notes on recent highly rated indie games, focusing on how narrative and gameplay can reinforce each other.",
        "探讨程序化生成（PCG）在 Roguelike 游戏中的应用，如何在随机性中保证关卡的连贯性与趣味性。": "Thoughts on PCG in roguelike games and how to keep levels coherent and interesting under randomness.",
        "点击进入": "Open",
        "💡 点击进入": "💡 Open"
    });

    // ============================================================
    // 运行时：语言识别、文本替换与按钮绑定
    // ============================================================
    function getPageKey() {
        const path = window.location.pathname.replace(/\\/g, '/');
        if (path.includes('/ai/')) return 'ai';
        if (path.includes('/game/')) return 'game';
        if (path.includes('/academic/')) return 'academic';
        return 'home';
    }

    function translateExactText(lang) {
        const pageKey = getPageKey();
        const map = exactTextMaps[pageKey]?.[lang] || {};
        if (lang !== 'zh' && Object.keys(map).length === 0) return;

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                const parent = node.parentElement;
                if (!parent || parent.closest('script, style')) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach(node => {
            if (!node.__i18nOriginal) node.__i18nOriginal = node.nodeValue;
            const original = node.__i18nOriginal;
            const trimmed = original.trim();
            const translated = lang === 'zh' ? trimmed : map[trimmed];
            if (!translated) {
                node.nodeValue = original;
                return;
            }
            node.nodeValue = original.replace(trimmed, translated);
        });
    }

    function translateExactAttrs(lang) {
        const pageKey = getPageKey();
        const map = exactAttrMaps[pageKey]?.[lang];
        const attrs = ['data-popup-title', 'data-popup-desc', 'title', 'alt'];
        document.querySelectorAll('*').forEach(el => {
            attrs.forEach(attr => {
                if (!el.hasAttribute(attr)) return;
                const originalAttr = 'data-i18n-original-' + attr;
                if (!el.hasAttribute(originalAttr)) el.setAttribute(originalAttr, el.getAttribute(attr));
                const original = el.getAttribute(originalAttr);
                el.setAttribute(attr, lang === 'zh' ? original : (map?.[original] || original));
            });
        });
    }

    function applyLanguage(lang) {
        const pageKey = getPageKey();
        if (!i18nData[lang]) lang = 'zh';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (i18nData[lang][key]) el.textContent = i18nData[lang][key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.dataset.i18nHtml;
            if (i18nData[lang][key]) el.innerHTML = i18nData[lang][key];
        });

        document.querySelectorAll('[data-i18n-dataset]').forEach(el => {
            const mappings = el.dataset.i18nDataset.split(';');
            mappings.forEach(map => {
                const [attr, key] = map.trim().split(':');
                if (i18nData[lang][key]) el.setAttribute('data-' + attr, i18nData[lang][key]);
            });
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const mappings = el.dataset.i18nAttr.split(';');
            mappings.forEach(map => {
                const [attr, key] = map.trim().split(':');
                if (attr && i18nData[lang][key]) el.setAttribute(attr, i18nData[lang][key]);
            });
        });

        translateExactText(lang);
        translateExactAttrs(lang);

        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        document.title = lang === 'zh'
            ? (pageKey === 'academic' ? '\u6211\u4e0e\u5b66\u672f' : document.title)
            : (pageKey === 'ai' ? 'AI & Me - Kaixin Fan' : pageKey === 'game' ? 'Games & Me - Kaixin Fan' : pageKey === 'academic' ? 'Academic & Me - Kaixin Fan' : i18nData[lang].doc_title);

        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.textContent = lang === 'zh' ? 'EN' : '\u4e2d';
            langBtn.title = lang === 'zh' ? 'Switch to English' : '\u5207\u6362\u5230\u4e2d\u6587';
        }

        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn && i18nData[lang].theme_title) themeBtn.title = i18nData[lang].theme_title;

        const newsMoreBtn = document.getElementById('news-more-btn');
        const newsMoreContainer = document.getElementById('news-more-container');
        if (newsMoreBtn && newsMoreContainer) {
            const isExpanded = newsMoreContainer.style.display !== 'none';
            newsMoreBtn.textContent = i18nData[lang][isExpanded ? 'news_less' : 'news_more'];
        }

        localStorage.setItem('lang', lang);
    }

    let initialized = false;

    function init() {
        if (initialized) return;
        initialized = true;

        applyLanguage('zh');

        const langToggleBtn = document.getElementById('lang-toggle');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', () => {
                const currentLang = localStorage.getItem('lang') || 'zh';
                applyLanguage(currentLang === 'zh' ? 'en' : 'zh');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return { applyLanguage, init, i18nData, exactTextMaps, exactAttrMaps };
})();
