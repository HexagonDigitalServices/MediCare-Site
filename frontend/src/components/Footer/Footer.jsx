const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/doctors" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Appointments", href: "/appointments" },
];

const services = [
  { name: "Blood Pressure Check", href: "/services" },
  { name: "Blood Sugar Test", href: "/services" },
  { name: "Full Blood Count", href: "/services" },
  { name: "X-Ray Scan", href: "/services" },
  { name: "Blood Sugar Test", href: "/services" },
];

const socialLinks = [
  {
    Icon: Facebook,
    color: footerStyles.facebookColor,
    name: "Facebook",
    href: "https://www.facebook.com/people/Hexagon-Digital-Services/61567156598660/",
  },
  {
    Icon: Twitter,
    color: footerStyles.twitterColor,
    name: "Twitter",
    href: "https://www.linkedin.com/company/hexagondigtial-services/",
  },
  {
    Icon: Instagram,
    color: footerStyles.instagramColor,
    name: "Instagram",
    href: "http://instagram.com/hexagondigitalservices?igsh=MWp2NG1oNTlibWVnZA%3D%3D",
  },
  {
    Icon: Linkedin,
    color: footerStyles.linkedinColor,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/hexagondigtial-services/",
  },
  {
    Icon: Youtube,
    color: footerStyles.youtubeColor,
    name: "YouTube",
    href: "https://youtube.com/@hexagondigitalservices?si=lxEFYNCP42t6AoDJ",
  },
];

{/* Newsletter & Social */}
<div className={footerStyles.newsletterSection}>
  <h3 className={footerStyles.newsletterTitle}>Stay Connected</h3>
  <p className={footerStyles.newsletterDescription}>
    Subscribe for health tips, medical updates, and wellness insights delivered
    to your inbox.
  </p>

  {/* Newsletter form */}
  <div className={footerStyles.newsletterForm}>
    <div className={footerStyles.mobileNewsletterContainer}>
      <input
        type="email"
        placeholder="Enter your email"
        className={footerStyles.emailInput}
      />
      <button className={footerStyles.mobileSubscribeButton}>
        <Send className={footerStyles.mobileButtonIcon} />
        Subscribe
      </button>
    </div>

    {/* Desktop newsletter */}
    <div className={footerStyles.desktopNewsletterContainer}>
      <input
        type="email"
        placeholder="Enter your email"
        className={footerStyles.desktopEmailInput}
      />
      <button className={footerStyles.desktopSubscribeButton}>
        <Send className={footerStyles.desktopButtonIcon} />
        <span className={footerStyles.desktopButtonText}>Subscribe</span>
      </button>
    </div>

    {/* Social icons */}
    <div className={footerStyles.socialContainer}>
      {socialLinks.map(({ Icon, color, name, href }, index) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.socialLink}
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <div className={footerStyles.socialIconBackground} />
          <Icon className={`${footerStyles.socialIcon} ${color}`} />
        </a>
      ))}
    </div>
  </div>
</div>;
