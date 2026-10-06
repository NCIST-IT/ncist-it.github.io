function Header() {
  return (
    <header>
      <div className="nav-container">
        <div className="logo">IT<span>智云社</span></div>
        <nav className="nav-links">
          <a href="#">首页</a>
          <a href="#about">关于我们</a>
          <a href="#research">研究方向</a>
          <a href="#team">团队成员</a>
          <a href="#contact">联系我们</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>智汇源头，科创未来</h1>
        <p>Zhiyuan Tech Lab - Exploring the Boundaries of Science</p>
        <a href="#research" className="btn">探索我们的研究</a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about-section">
      <div className="section-title">
        <p>聚焦前沿技术，探索科技边界</p>
      </div>
      <div className="about-content">
        <div className="about-intro">
          <h3>实验室简介</h3>
          <p>本实验室由计算机相关专业学生组成，聚焦软件开发、人工智能、网络安全、前端交互与数字化项目管理等方向。我们坚持以项目驱动学习，以实践推动创新，鼓励成员在真实场景中探索技术、打磨能力。</p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <h3>🎯 我们的目标</h3>
            <p>打造开放、协作、重实践的技术成长平台，推动科研成果与项目落地。</p>
          </div>
          <div className="about-card">
            <h3>🔬 研究方向</h3>
            <p>涵盖软件工程、人工智能、网络安全、人机交互、项目管理等多个技术领域。</p>
          </div>
          <div className="about-card">
            <h3>🏆 团队成果</h3>
            <p>累计完成多个项目开发，参与各类技术竞赛，持续产出技术文档与实践作品。</p>
          </div>
          <div className="about-card">
            <h3>🤝 团队氛围</h3>
            <p>开放交流、互助成长，定期开展技术分享与项目协作。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats-section" id="about">
      <div className="stats-grid">
        <div className="stat-item">
          <h3>5大</h3>
          <p>核心技术方向</p>
        </div>
        <div className="stat-item">
          <h3>100+</h3>
          <p>累计核心代码行数</p>
        </div>
        <div className="stat-item">
          <h3>N场</h3>
          <p>技术培训场次</p>
        </div>
        <div className="stat-item">
          <h3>30+</h3>
          <p>创赛项目获奖量</p>
        </div>
      </div>
    </section>
  )
}

function Research() {
  return (
    <section className="research-section" id="research">
      <div className="section-title">
        <h2>核心研究领域</h2>
        <p>我们要解决的是未来十年的关键技术挑战</p>
      </div>
      <div className="research-grid">
        <div className="research-card">
          <h3>🛠️ 软件工程与系统架构</h3>
          <p>专注于大型软件系统开发、算法逻辑构建及全栈技术实现，致力于将创意转化为高效稳定的软件产品。</p>
        </div>
        <div className="research-grid">
          <div className="research-card">
            <h3>🛡️ 网络空间安全</h3>
            <p>研究网络攻防技术、数据加密与隐私保护，构建坚固的数字安全防线，保障信息系统的安全稳定运行。</p>
          </div>
          <div className="research-grid">
            <div className="research-card">
              <h3>💻 人机交互与可视化</h3>
              <p>结合美学与工程技术，研究下一代用户界面设计与交互体验，打造极具科技感的数据可视化平台。</p>
            </div>
            <div className="research-card">
              <h3>🧠 人工智能与深度学习</h3>
              <p>探索 AI 前沿技术，研究机器学习算法与神经网络模型，推动计算机视觉与自然语言处理技术的落地应用。</p>
            </div>
            <div className="research-card">
              <h3>📈 数字化项目管理</h3>
              <p>统筹科研项目的规划与执行，负责技术成果的转化推广与社群生态建设，提升团队综合协作效能。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section className="team-section" id="team">
      <div className="section-title">
        <h2>团队成员</h2>
        <p>汇聚热爱技术、勇于探索的科研伙伴</p>
      </div>
      <div className="team-grid">
        <div className="team-card">
          <h3>成员姓名</h3>
          <p>实验室负责人</p>
        </div>
        <div className="team-card">
          <h3>成员姓名</h3>
          <p>人工智能方向</p>
        </div>
        <div className="team-card">
          <h3>成员姓名</h3>
          <p>网络安全方向</p>
        </div>
        <div className="team-card">
          <h3>成员姓名</h3>
          <p>软件开发方向</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <h2>IT智云社</h2>
        <p>地址：应急管理大学</p>
        <p>邮箱： | 电话：</p>
        <div className="footer-info">
          © 2024 Zhiyuan Technology Lab. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Stats />
      <Research />
      <Team />
      <Footer />
    </>
  )
}

export default App
