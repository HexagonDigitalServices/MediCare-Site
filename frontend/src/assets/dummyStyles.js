// assets/dummyStyles.js

export const appointmentPageStyles = {
  // Main container styles
  pageContainer: "min-h-screen font-serif bg-linear-to-br from-green-50 to-emerald-100 py-10 px-4",
  maxWidthContainer: "max-w-6xl mx-auto",
  
  // Title styles
  doctorTitle: "text-3xl font-bold text-emerald-700 text-center mb-6",
  serviceTitle: "text-3xl font-bold text-blue-700 text-center mb-6",
  
  // Loading and empty states
  loadingText: "text-center text-emerald-600 py-4",
  serviceLoadingText: "text-center text-blue-600 py-4",
  emptyStateText: "text-center text-emerald-600 py-4",
  serviceEmptyStateText: "text-center text-blue-600 py-4",
  
  // Grid layouts
  doctorGrid: "grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
  serviceGrid: "grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-10",
};

export const cardStyles = {
  // Doctor appointment card
  doctorCard: "bg-white border border-emerald-200 rounded-2xl p-6 shadow-md hover:shadow-emerald-400 transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center",
  serviceCard: "bg-white border border-blue-200 rounded-2xl p-6 shadow-md",
  
  // Image containers
  doctorImageContainer: "w-28 h-28 rounded-full border-4 border-emerald-300 shadow-md bg-emerald-50 flex items-center justify-center overflow-hidden",
  serviceImageContainer: "w-28 h-28 rounded-full border-4 border-blue-300 mx-auto bg-blue-50 flex items-center justify-center overflow-hidden",
  
  // Images
  image: "w-full h-full object-cover",
  
  // Text styles
  doctorName: "text-xl md:text-sm xl:text-md whitespace-nowrap lg:text-lg font-semibold mt-4 text-center",
  serviceName: "text-xl md:text-sm lg:text-md xl:text-lg font-semibold text-center mt-4",
  specialization: "text-sm text-emerald-700 mt-1",
  price: "text-center text-green-700 font-semibold text-lg mt-2",
  
  // Date and time containers
  dateContainer: "mt-4 rounded-full border bg-emerald-50 border-emerald-200 py-1 px-3 w-full flex justify-center gap-2",
  serviceDateContainer: "mt-4 rounded-full border bg-blue-50 border-blue-200 py-1 px-3 flex justify-center gap-2 text-sm",
  timeContainer: "mt-2 rounded-full border bg-emerald-50 border-emerald-200 py-1 px-3 w-full flex justify-center gap-2",
  serviceTimeContainer: "mt-2 rounded-full border bg-blue-50 border-blue-200 py-1 px-3 flex justify-center gap-2 text-sm",
  
  // Badges container
  badgesContainer: "mt-4 flex justify-center gap-2",
  
  // Rescheduled text
  rescheduledText: "mt-3 text-center xl:text-md text-sm text-blue-700",
  serviceRescheduledText: "mt-3 text-center xl:text-md xl:whitespace-nowrap text-sm text-blue-700",
  rescheduledSpan: "font-semibold xl:line-clamp-2",
};

export const badgeStyles = {
  paymentBadge: {
    online: "px-3 py-1 rounded-full font-semibold text-xs bg-green-100 text-green-700 border border-green-300 flex items-center gap-1",
    cash: "px-3 py-1 rounded-full font-semibold text-xs bg-yellow-100 text-yellow-700 border border-yellow-300 flex items-center gap-1"
  },
  
  statusBadge: {
    completed: "px-3 py-1 rounded-full font-semibold text-xs bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1",
    confirmed: "px-3 py-1 rounded-full font-semibold text-xs bg-green-100 text-green-700 border border-green-200 flex items-center gap-1",
    pending: "px-3 py-1 rounded-full font-semibold text-xs bg-yellow-100 text-yellow-700 border border-yellow-200 flex items-center gap-1",
    canceled: "px-3 py-1 rounded-full font-semibold text-xs bg-red-100 text-red-700 border border-red-200 flex items-center gap-1",
    default: "px-3 py-1 rounded-full font-semibold text-xs bg-blue-100 text-blue-700 border border-blue-200 flex items-center gap-1"
  }
};

// Icon size helper
export const iconSize = {
  small: "w-3",
  medium: "w-4"
};

// assets/dummyStyles.js

export const bannerStyles = {
  // Banner container styles
  bannerContainer: "relative w-full max-w-7xl mx-auto my-12 px-4",
  
  // Main container with animated border
  mainContainer: "relative rounded-3xl shadow-2xl overflow-hidden group",
  
  // Border outline styles
  borderOutline: "absolute inset-0 rounded-3xl p-[3px] pointer-events-none",
  outerAnimatedBand: "absolute inset-0 rounded-3xl bg-linear-to-r from-green-400 via-emerald-500 to-green-400 animate-[spin_3s_linear_infinite] opacity-80",
  innerWhiteBorder: "absolute inset-0.5 rounded-3xl bg-white",
  
  // Content container
  contentContainer: "relative z-20 p-6 sm:p-8 md:p-10 lg:p-12",
  
  // Layout styles
  flexContainer: "flex flex-col lg:flex-row items-center justify-between gap-8",
  leftContent: "flex-1 text-center lg:text-left",
  rightImageSection: "flex-1 relative w-full",
  
  // Header with badge
  headerBadgeContainer: "flex flex-col lg:flex-row items-center justify-center lg:justify-start mb-4 lg:mb-6 gap-4",
  stethoscopeContainer: "relative",
  stethoscopeInner: "relative bg-linear-to-br from-green-300 to-emerald-600 p-3 rounded-full shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300",
  stethoscopeIcon: "w-7 h-7 text-white",
  
  // Title styles
  titleContainer: "font-[pacifico]",
  title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-1",
  titleGradient: "text-transparent bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text",
  
  // Stars
  starsContainer: "flex items-center justify-center lg:justify-start mt-1",
  starsInner: "flex gap-1",
  starIcon: "w-4 h-4 fill-yellow-400 text-yellow-400",
  
  // Tagline
  tagline: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-700 mb-5 leading-tight",
  taglineHighlight: "text-green-600 font-semibold",
  
  // Features grid
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm sm:text-base",
  featureItem: "flex items-center justify-center lg:justify-start bg-linear-to-br from-green-500 to-green-200 backdrop-blur-sm p-3 rounded-full shadow-sm border",
  featureIcon: "w-5 h-5 text-white mr-3",
  featureText: "text-gray-700 font-medium",
  
  // Feature border colors
  featureBorderGreen: "border-green-100",
  featureBorderBlue: "border-blue-100",
  featureBorderEmerald: "border-emerald-100",
  featureBorderPurple: "border-purple-100",
  
  // CTA Buttons container
  ctaButtonsContainer: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start",
  
  // Book appointment button
  bookButton: "group relative lg:whitespace-nowrap bg-linear-to-r from-green-500 to-emerald-300 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transform transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden text-sm sm:text-base",
  bookButtonOverlay: "absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000",
  bookButtonContent: "relative flex items-center justify-center gap-2",
  bookButtonIcon: "w-4 h-4 sm:w-5 sm:h-5",
  
  // Emergency call button
  emergencyButton: "group border-2 lg:whitespace-nowrap border-red-400 text-red-600 bg-red-300 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transform transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:bg-red-400/80 text-sm sm:text-base",
  emergencyButtonContent: "flex items-center justify-center gap-2",
  emergencyButtonIcon: "w-4 h-4 sm:w-5 sm:h-5",
  
  // Image section
  imageContainer: "relative w-full max-w-md mx-auto",
  imageFrame: "relative transform transition-transform duration-500 overflow-hidden rounded-xl",
  image: "w-full object-cover h-56 sm:h-72 md:h-96 lg:h-[360px] xl:h-[420px] transition-transform duration-700"
};

export const commonStyles = {
  // Common utility styles can be added here for reuse across components
  textCenter: "text-center",
  textLeft: "text-left",
  flexCol: "flex flex-col",
  flexRow: "flex flex-row",
  itemsCenter: "items-center",
  justifyCenter: "justify-center",
  justifyStart: "justify-start",
  gap4: "gap-4",
  mb4: "mb-4",
  mb6: "mb-6"
};


// dummyStyles.js - Centralized CSS styles for all components

export const certificationStyles = {
  // Container styles
  container: "relative py-6 bg-linear-to-brfrom-emerald-50 via-green-50 to-teal-50 overflow-hidden",
  
  // Background styles
  backgroundGrid: "absolute inset-0",
  topLine: "absolute top-0 left-0 w-full h-1 bg-linear-to-br from-transparent via-green-400 to-transparent opacity-60",
  gridContainer: "absolute inset-0 opacity-[0.02]",
  grid: "grid grid-cols-12 gap-4 w-full h-full",
  gridCell: "border border-green-300 rounded",
  
  // Content wrapper
  contentWrapper: "relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
  
  // Heading styles
  headingContainer: "text-center mb-12",
  headingInner: "relative inline-block",
  leftLine: "absolute -left-20 top-1/2 w-16 h-0.5 bg-linear-to-br from-transparent to-green-400",
  rightLine: "absolute -right-20 top-1/2 w-16 h-0.5 bg-linear-to-br from-transparent to-teal-400",
  title: "text-3xl lg:text-6xl font-serif text-gray-900 mb-4 tracking-tight",
  titleText: "bg-linear-to-br from-green-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent",
  subtitle: "text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light tracking-wide",
  badgeContainer: "inline-flex items-center px-5 py-2.5 bg-green-500/10 border border-green-400/30 rounded-full mt-6 backdrop-blur-sm",
  badgeDot: "w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse mr-3",
  badgeText: "text-green-700 font-semibold tracking-wide text-sm",
  
  // Logos container
  logosContainer: "relative mb-10",
  logosInner: "relative p-4 mx-auto max-w-9xl",
  logosFlexContainer: "flex overflow-hidden",
  logosMarquee: "flex animate-marquee-single whitespace-nowrap py-3",
  logoItem: "inline-flex flex-col items-center mx-10 transform transition-all duration-500 group",
  logoImage: "w-16 h-16 object-contain filter transition-all duration-500",
  logoText: "mt-3 font-serif italic text-sm font-semibold text-gray-700 text-center max-w-[120px] leading-tight group-hover:text-green-700 transition-colors duration-300",
  
  // Animation keyframes and class (to be added via style tag)
  animationStyles: `
    @keyframes marquee-single {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }
    .animate-marquee-single {
      animation: marquee-single 60s linear infinite;
    }
  `
};

// Add to existing dummyStyles.js

export const contactPageStyles = {
  // Page container
  pageContainer: "min-h-screen bg-linear-to-br from-emerald-100 via-white to-emerald-50 py-12 px-4 sm:px-6 md:px-8 lg:px-20 font-serif relative overflow-hidden",
  
  // Background accents
  bgAccent1: "hidden md:block absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl opacity-18 animate-pulse",
  bgAccent2: "hidden lg:block absolute bottom-0 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-10 animate-spin-slow",
  
  // Grid and layout
  gridContainer: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start",
  
  // Form container
  formContainer: "relative bg-white/60 backdrop-blur-sm shadow-2xl rounded-3xl border border-emerald-200 p-6 sm:p-8 md:p-10 transition-all",
  
  // Text styles
  formTitle: "text-3xl sm:text-4xl font-extrabold text-emerald-800 mb-2",
  formSubtitle: "text-sm sm:text-md text-emerald-700 mb-6 italic",
  
  // Form layout
  formGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  formSpace: "space-y-5",
  
  // Labels
  label: "text-emerald-800 text-sm font-semibold flex items-center gap-2",
  
  // Inputs
  input: "w-full px-4 py-2 mt-1 border border-emerald-300 bg-emerald-50/40 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow text-sm sm:text-base",
  textarea: "w-full px-4 py-2 mt-1 border border-emerald-300 bg-emerald-50/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow text-sm sm:text-base",
  
  // Error messages
  error: "text-xs text-rose-500 mt-1",
  
  // Button container
  buttonContainer: "flex flex-col md:flex-row items-center gap-3",
  button: "w-full md:w-auto flex items-center gap-2 justify-center bg-emerald-600 text-white px-5 py-2 rounded-full shadow-lg transition-transform active:scale-95",
  sentMessage: "text-emerald-700 italic text-sm animate-pulse",
  
  // Info container
  infoContainer: "space-y-6",
  infoCard: "bg-white/70 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-xl border border-emerald-100",
  infoTitle: "text-xl sm:text-2xl font-bold mb-2",
  infoText: "text-sm sm:text-md",
  infoItem: "mt-3 flex items-center gap-2 text-sm sm:text-md",
  
  // Map
  map: "w-full h-56 sm:h-64 md:h-72 lg:h-72 rounded-3xl shadow-2xl border-2 border-emerald-200 hover:shadow-emerald-400 transition-all duration-500",
  
  // Hours container
  hoursContainer: "bg-linear-to-br from-emerald-200 to-emerald-100 rounded-2xl p-4 shadow-inner border border-emerald-300",
  hoursTitle: "text-lg sm:text-xl font-semibold mb-1",
  hoursText: "text-gray-700 text-sm sm:text-md",
  
  // Animation keyframes
  animationKeyframes: `
    .animate-spin-slow {
      animation: spin 15s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `
};


// Add to existing dummyStyles.js file

export const doctorsPageStyles = {
  // Main container
  mainContainer: "min-h-screen bg-linear-to-br from-emerald-50 to-teal-100 py-8 sm:py-10 px-3 sm:px-6 relative overflow-hidden",
  
  // Background shapes
  backgroundShape1: "absolute -top-40 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse",
  backgroundShape2: "absolute -bottom-40 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse animation-delay-2000",
  
  // Wrapper
  wrapper: "max-w-7xl mx-auto relative z-10 font-serif",
  
  // Header
  headerContainer: "text-center mb-8 sm:mb-10 animate-fade-in",
  headerTitle: "text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-3 tracking-tight",
  headerSubtitle: "text-sm sm:text-base text-emerald-700 font-light",
  
  // Search bar
  searchContainer: "flex justify-center mb-8 sm:mb-12 animate-slide-up",
  searchWrapper: "relative w-full max-w-xl transition-all duration-500 px-2 sm:px-0",
  searchInput: "w-full py-3 sm:py-4 pl-12 pr-10 text-sm sm:text-lg rounded-full border border-emerald-300 bg-white/90 text-emerald-800 placeholder-emerald-400 shadow-md sm:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:shadow-xl transition-all duration-300 hover:shadow-2xl",
  searchIcon: "absolute left-4 top-3 sm:top-4 text-emerald-600 w-5 h-5 sm:w-6 sm:h-6",
  clearButton: "absolute right-3 top-3 sm:top-4 text-emerald-600 hover:text-emerald-800 transition",
  
  // Error area
  errorContainer: "text-center mb-6",
  errorText: "text-sm text-rose-600 mb-2",
  retryButton: "px-4 py-2 rounded-full bg-emerald-600 text-white",
  
  // Loading skeleton
  skeletonGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8",
  skeletonCard: "animate-pulse bg-white/80 backdrop-blur-md rounded-3xl p-4 sm:p-5 md:p-6 text-center transition-all duration-300",
  skeletonImage: "relative mx-auto mb-4 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-36 lg:h-36 bg-emerald-100 rounded-full",
  skeletonName: "h-5 bg-emerald-100 rounded w-3/4 mx-auto mb-2",
  skeletonSpecialization: "h-4 bg-emerald-100 rounded w-1/2 mx-auto mb-3",
  skeletonButton: "h-8 bg-emerald-100 rounded w-full mx-auto mt-4",
  
  // Doctors grid
  doctorsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 transition-all duration-300",
  
  // Doctor card
  doctorCard: "bg-white/80 backdrop-blur-md rounded-3xl p-4 sm:p-5 md:p-6 text-center transition-all duration-300 hover:shadow-xl animate-fade-in-up",
  doctorCardUnavailable: "opacity-80",
  
  // Doctor image container
  imageContainer: "relative mx-auto mb-4 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-36 lg:h-36",
  imageContainerUnavailable: "opacity-70 cursor-not-allowed",
  doctorImage: "w-full h-full rounded-full object-cover border-4 border-emerald-200 shadow-lg transform transition-transform duration-300 group-hover:scale-105",
  doctorImageUnavailable: "border-4 border-gray-300 shadow-md",
  
  // Doctor info
  doctorName: "text-base sm:text-lg md:text-md whitespace-nowrap lg:text-lg font-bold text-emerald-900 mb-1",
  doctorSpecialization: "text-sm sm:text-sm md:text-sm text-emerald-600 font-medium mb-3",
  
  // Experience badge
  experienceBadge: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 bg-emerald-50 border border-emerald-300 shadow-sm",
  experienceIcon: "w-4 h-4",
  
  // Book button (available)
  bookButton: "w-full inline-flex items-center justify-center gap-2 py-2 rounded-full font-medium transition-all duration-300 text-sm bg-linear-to-r from-emerald-300 to-teal-500 text-white hover:shadow-lg",
  bookButtonIcon: "w-5 h-5",
  
  // Not available button
  notAvailableButton: "w-full inline-flex items-center justify-center gap-2 py-2 rounded-full font-medium bg-gray-300 text-gray-600 cursor-not-allowed text-sm",
  notAvailableIcon: "w-5 h-5",
  
  // No results
  noResults: "col-span-full text-center py-10 text-emerald-800 font-medium text-base animate-fade-in",
  
  // Show more button
  showMoreContainer: "flex justify-center mt-8 sm:mt-10",
  showMoreButton: "flex items-center cursor-pointer gap-2 px-5 py-2.5 bg-linear-to-r from-emerald-400 to-teal-500 text-white rounded-full text-md font-semibold shadow-md hover:shadow-lg transition-all duration-300",
  showMoreIcon: "w-5 h-5",
  
  // Link focus styles
  focusRing: "focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-full",
  
  // Animation styles
  animationFadeIn: "animate-fade-in",
  animationFadeInUp: "animate-fade-in-up",
  animationSlideUp: "animate-slide-up"
};



// Footer styles
export const footerStyles = {
  // Main container
  footerContainer: "relative font-serif bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 border-t border-emerald-200 overflow-hidden",
  
  // Floating icons
  floatingIcon1: "absolute top-5 right-5 animate-float hidden md:block",
  floatingIcon2: "absolute top-1/3 left-5 animate-float hidden md:block",
  stethoscopeIcon: "w-8 h-8 text-emerald-600",
  activityIcon: "w-5 h-5 text-green-500",
  
  // Main content
  mainContent: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10",
  gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 mb-10 text-center lg:text-left",
  
  // Company info
  companySection: "lg:col-span-1 flex flex-col items-center lg:items-start",
  logoContainer: "flex items-center space-x-5 mb-6 transform transition-transform duration-500",
  logoWrapper: "relative",
  logoImageContainer: "relative w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 p-1 transform transition-transform duration-500",
  logoImage: "w-full h-full object-contain",
  companyName: "text-2xl md:text-3xl lg:text-3xl font-bold bg-linear-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent font-['Poppins'] tracking-tight",
  companyTagline: "text-emerald-600 font-serif text-xs md:text-sm font-semibold tracking-wide mt-1",
  companyDescription: "text-emerald-700 font-serif italic mb-5 leading-relaxed text-sm md:text-base font-light",
  
  // Contact info
  contactContainer: "space-y-3 w-full md:w-auto",
  contactItem: "flex items-center justify-center md:justify-start space-x-4 text-emerald-700 hover:text-emerald-800 transition-all duration-300 group transform hover:translate-x-0 md:hover:translate-x-2",
  contactIconWrapper: "w-9 h-9 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm",
  contactIcon: "w-4 h-4 text-emerald-600",
  contactText: "text-sm font-medium",
  
  // Links sections
  linksSection: "lg:col-span-1",
  sectionTitle: "text-lg md:text-xl font-bold text-emerald-800 mb-6 relative inline-block",
  linksList: "space-y-2",
  linkItem: "w-full",
  
  // Quick Links
  quickLink: "flex items-center justify-center md:justify-start text-emerald-700 hover:text-emerald-800 transition-all duration-300 group text-sm md:text-base font-medium py-2 px-3 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200",
  quickLinkIconWrapper: "w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center mr-3",
  quickLinkIcon: "w-3 h-3 text-emerald-600",
  
  // Services
  serviceLink: "flex items-center justify-center md:justify-start text-emerald-700 hover:text-green-700 transition-all duration-300 group text-sm md:text-base font-medium py-2 px-3 rounded-lg hover:bg-green-50 border border-transparent hover:border-green-200",
  serviceIcon: "w-3 h-3 bg-green-500 rounded-full mr-3",
  
  // Newsletter & Social
  newsletterSection: "lg:col-span-1 flex flex-col items-center lg:items-start",
  newsletterTitle: "text-lg md:text-xl font-bold text-emerald-800 mb-4",
  newsletterDescription: "text-emerald-700 text-sm md:text-base mb-4 font-light text-center lg:text-left",
  newsletterForm: "w-full max-w-md",
  
  // Mobile newsletter
  mobileNewsletterContainer: "flex flex-col gap-3 lg:hidden",
  emailInput: "w-full px-4 py-3 text-base text-emerald-800 bg-white border-2 border-emerald-200 rounded-full focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:border-emerald-400 transition-all duration-300 shadow-sm placeholder-emerald-400",
  mobileSubscribeButton: "w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-linear-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
  mobileButtonIcon: "w-4 h-4",
  
  // Desktop newsletter
  desktopNewsletterContainer: "relative hidden lg:block",
  desktopEmailInput: "w-full px-6 py-4 text-base text-emerald-800 bg-white border-2 border-emerald-200 rounded-full focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:border-emerald-400 transition-all duration-300 transform shadow-lg placeholder-emerald-400",
  desktopSubscribeButton: "absolute right-2 xl:px-2 top-2 bg-linear-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full cursor-pointer transition-all duration-300 transform flex items-center shadow-lg hover:shadow-xl",
  desktopButtonIcon: "w-4 h-4 mr-2",
  desktopButtonText: "font-semibold",
  
  // Social links
  socialContainer: "flex gap-3 justify-center lg:justify-start mt-6",
  socialLink: "relative group",
  socialIconBackground: "absolute inset-0 bg-linear-to-r from-emerald-400 to-green-500 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300 hidden lg:block",
  socialIcon: "w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 p-2 text-emerald-700 cursor-pointer transform hover:scale-110 hover:rotate-6 transition-all duration-300 relative z-10 bg-white rounded-2xl shadow-lg border-2 border-emerald-100",
  
  // Social icon colors
  facebookColor: "hover:text-blue-600",
  twitterColor: "hover:text-blue-400",
  instagramColor: "hover:text-pink-600",
  linkedinColor: "hover:text-blue-700",
  youtubeColor: "hover:text-red-600",
  
  // Bottom section
  bottomSection: "flex flex-col md:flex-row justify-center lg:justify-between items-center gap-4 md:gap-6 border-t border-emerald-100 pt-6",
  copyright: "text-emerald-700 text-sm md:text-base font-medium flex items-center gap-2",
  designerText: "text-emerald-700 text-sm md:text-base font-medium flex items-center gap-2",
  designerLink: "font-bold text-emerald-500 hover:text-purple-700 transition-colors duration-300",
  
  // Animation keyframes for floating icons (to be added via style tag)
  animationStyles: `
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `
};


// Add to existing dummyStyles.js

export const homeDoctorsStyles = {
  // Section container
  section: "py-10 bg-linear-to-br from-green-50 to-blue-50",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Header
  header: "text-center mb-10",
  title: "text-4xl md:text-5xl font-serif italic text-gray-900",
  titleSpan: "text-emerald-600 font-semibold",
  subtitle: "mt-2 text-gray-600 max-w-2xl mx-auto",
  
  // Error/Retry
  errorContainer: "text-center mb-6",
  errorText: "text-sm text-rose-600 mb-2",
  retryButton: "px-4 py-2 rounded-full bg-emerald-600 text-white",
  
  // Loading skeleton
  skeletonGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8",
  skeletonCard: "animate-pulse bg-white rounded-3xl shadow-md p-4 h-72",
  skeletonImage: "bg-emerald-100 rounded-lg h-40 mb-4",
  skeletonText1: "h-5 bg-emerald-100 rounded w-3/4 mb-2",
  skeletonText2: "h-4 bg-emerald-100 rounded w-1/2 mb-3",
  skeletonButton: "h-8 w-full bg-emerald-100 rounded",
  
  // Doctors grid
  doctorsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8",
  
  // Doctor card
  article: "group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition transform duration-300 overflow-hidden",
  
  // Image containers
  imageContainerAvailable: "relative h-60 sm:h-44 md:h-48 lg:h-52 overflow-hidden rounded-t-3xl",
  imageContainerUnavailable: "relative h-60 sm:h-44 md:h-48 lg:h-52 overflow-hidden rounded-t-3xl opacity-80 cursor-not-allowed",
  image: "w-full h-full object-cover object-center transform transition-transform duration-500",
  unavailableBadge: "absolute top-3 left-3 bg-rose-50 text-rose-700 text-xs px-2 py-1 rounded-full shadow",
  
  // Card body
  cardBody: "p-3 sm:p-4 md:p-5 font-serif",
  doctorName: "text-base sm:text-lg md:text-sm lg:text-md xl:text-xl font-semibold text-black",
  specialization: "text-sm sm:text-sm md:text-sm text-emerald-600 font-medium mt-1",
  
  // Experience badge
  experienceContainer: "mt-3 flex items-center justify-between text-sm text-gray-600",
  experienceBadge: "flex items-center gap-2 border border-green-300 bg-green-100 px-2 py-1 rounded-full text-xs sm:text-sm",
  
  // Buttons
  buttonContainer: "mt-3",
  buttonAvailable: "w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm bg-linear-to-br from-emerald-300 to-teal-500 text-white hover:shadow-lg",
  buttonUnavailable: "w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-full font-medium bg-gray-300 text-gray-600 cursor-not-allowed text-sm",
  
  // Custom CSS
  customCSS: `
    /* keep your shadow look consistent */
    .shadow-md { box-shadow: 0 6px 18px rgba(14, 30, 37, 0.06); }
    .shadow-2xl { box-shadow: 0 18px 50px rgba(14, 30, 37, 0.12); }

    /* optional: slightly reduce spacing on very small devices for compactness */
    @media (max-width: 420px) {
      .max-w-7xl { padding-left: 12px; padding-right: 12px; }
    }
  `
};

// Add to existing dummyStyles.js file

export const loginPageStyles = {
  // Main container
  mainContainer: "min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-100 to-green-200 relative font-serif overflow-hidden",
  
  // Back button
  backButton: "absolute top-6 left-6 cursor-pointer flex items-center gap-2 text-green-800 font-semibold hover:text-green-600 transition-all duration-300",
  backButtonIcon: "w-5 h-5",
  
  // Login card
  loginCard: "relative z-10 bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-[90%] max-w-md border border-green-200 transition-all duration-500 hover:shadow-green-300/50",
  
  // Logo
  logoContainer: "flex justify-center mb-6",
  logo: "w-28 h-28 object-contain drop-shadow-lg",
  
  // Header
  title: "text-3xl font-bold text-center text-emerald-700 tracking-wide mb-2",
  subtitle: "text-center text-green-600 mb-6 text-sm",
  
  // Form
  form: "space-y-5",
  
  // Input fields
  input: "w-full px-5 py-3 rounded-full border border-green-300 bg-white/80",
  
  // Submit button
  submitButton: "w-full py-3 bg-linear-to-r from-emerald-400 to-green-600 text-white font-semibold rounded-full",
  
  // Toast styles (kept in component since they're inline)
  // These remain in the component as they're JS objects, not CSS classes
  
  // Responsive adjustments
  responsiveCard: "p-8 w-[90%] max-w-md"
};

// Add to dummyStyles.js if you want to extract toast styles too

export const toastStyles = {
  errorToast: {
    borderRadius: "12px",
    background: "#fff",
    color: "#14532d",
    border: "1px solid #86efac",
    boxShadow: "0 4px 12px rgba(16,185,129,0.3)",
  },
  successToast: {
    borderRadius: "12px",
    background: "#ecfdf5",
    color: "#065f46",
    border: "1px solid #6ee7b7",
    boxShadow: "0 4px 15px rgba(16,185,129,0.3)",
    fontWeight: "600",
  }
};



// Navbar styles
export const navbarStyles = {
  // Main container
  navbarContainer: "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 transition-transform duration-500",
  navbarHidden: "-translate-y-full",
  navbarVisible: "translate-y-0",
  
  // Border animation
  navbarBorder: "navbar-border",
  
  // Content wrapper
  contentWrapper: "max-w-7xl font-[pacifico] md:px-2 mx-auto px-4 sm:px-6 lg:px-8",
  flexContainer: "flex items-center justify-between h-20",
  
  // Logo section
  logoLink: "flex items-center gap-3 -ml-3 sm:-ml-4",
  logoContainer: "relative group w-20 h-20 sm:w-24 sm:h-24 lg:w-15 lg:h-15 xl:w-32 xl:h-32",
  logoImageWrapper: "relative flex items-center justify-center overflow-hidden p-2 mx-1 h-full w-full",
  logoImage: "w-14 h-14 sm:w-18 sm:h-18 lg:w-15 lg:h-15 xl:w-24 xl:h-24 md:w-20 md:h-20 object-contain",
  logoTextContainer: "block sm:block",
  logoTitle: "text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-600 to-green-600 tracking-tight",
  logoSubtitle: "text-xs lg:text-xs text-gray-500",
  
  // Desktop navigation
  desktopNav: "hidden lg:-mx-5 lg:flex items-center gap-2",
  navItemsContainer: "flex gap-1 bg-white border border-emerald-200 p-1 rounded-full shadow-lg",
  navItem: "nav-item px-5 md:px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
  navItemActive: "active",
  navItemInactive: "text-gray-700 hover:text-emerald-600",
  
  // Right side
  rightContainer: "flex items-center gap-3",
  
  // Signed out buttons
  doctorAdminButton: "btn-add hidden lg:inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold transition-transform duration-200",
  doctorAdminIcon: "w-4 h-4",
  doctorAdminText: "hidden lg:text-xs lg:whitespace-nowrap sm:inline-block",
  loginButton: "btn-login hidden lg:flex lg:text-sm items-center gap-2 bg-linear-to-r from-emerald-400 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 cursor-default",
  loginIcon: "w-4 h-4",
  
  // Mobile toggle
  mobileToggle: "lg:hidden p-2.5 rounded-lg hover:bg-emerald-50 transition-colors",
  toggleIcon: "w-6 h-6 text-gray-900",
  
  // Mobile menu
  mobileMenu: "mobile-menu lg:hidden pb-4 space-y-2 border-t border-emerald-100 pt-4",
  mobileMenuItem: "block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
  mobileMenuItemActive: "bg-emerald-500 text-white",
  mobileMenuItemInactive: "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600",
  
  // Mobile signed out buttons
  mobileDoctorAdminButton: "w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-emerald-200 bg-white text-sm font-semibold hover:bg-emerald-50 transition-all",
  mobileLoginContainer: "w-full mt-3",
  mobileLoginButton: "w-full cursor-default md:rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-emerald-500 to-green-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all",
  
  // Animation styles (to be added via style tag)
  animationStyles: `
    @keyframes borderFlow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .navbar-border {
      height: 2px;
      background: linear-gradient(90deg, #10b981, #34d399, #059669, #10b981);
      background-size: 300% 100%;
      animation: borderFlow 6s ease infinite;
    }
    .nav-item {
      animation: slideIn 0.45s ease-out forwards;
      position: relative;
    }
    .nav-item.active {
      background: white !important;
      color: #059669 !important;
      box-shadow: 0 6px 18px rgba(5, 150, 105, 0.12);
    }
    .nav-item.active::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      background: #10b981;
      border-radius: 9999px;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
        transform: translateX(-50%) scale(1);
      }
      50% {
        opacity: 0.5;
        transform: translateX(-50%) scale(1.25);
      }
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Add button styles */
    .btn-add {
      background-image: linear-gradient(white, white), linear-gradient(90deg, #10b981, #34d399, #059669);
      background-origin: padding-box, border-box;
      background-clip: padding-box, border-box;
      border: 2px solid transparent;
      border-radius: 9999px;
      box-shadow: 0 2px 8px rgba(16,185,129,0.06);
      transform: translateZ(0);
    }
    .btn-add:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(16,185,129,0.12);
    }
    .btn-login {
      animation: glow 2.2s ease-in-out infinite;
    }
    @keyframes glow {
      0%,
      100% {
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.22),
          0 4px 12px rgba(16, 185, 129, 0.12);
      }
      50% {
        box-shadow: 0 0 32px rgba(16, 185, 129, 0.36),
          0 6px 22px rgba(16, 185, 129, 0.18);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        height: 0;
      }
      to {
        opacity: 1;
        height: auto;
      }
    }
    .mobile-menu {
      animation: fadeIn 0.28s ease-out;
    }
  `
};

// Add to existing dummyStyles.js

export const servicePageStyles = {
  // Page container
  pageContainer: "min-h-screen py-12 px-6 lg:px-20 font-serif bg-linear-to-b from-emerald-50 to-white",
  maxWidthContainer: "max-w-6xl mx-auto",
  
  // Header
  header: "mb-10 text-center",
  title: "text-4xl font-bold text-emerald-900",
  subtitle: "mt-2 text-emerald-800/80",
  
  // Error/Retry
  errorContainer: "text-center mb-6",
  errorText: "text-sm text-rose-600 mb-2",
  retryButton: "px-4 py-2 rounded-full bg-emerald-600 text-white",
  
  // Loading skeleton
  skeletonGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8",
  skeletonCard: "animate-pulse group rounded-2xl overflow-hidden bg-white shadow-xl p-4",
  skeletonImage: "w-full h-48 bg-emerald-100 rounded mb-4",
  skeletonText1: "h-5 bg-emerald-100 rounded w-3/4 mb-2",
  skeletonText2: "h-4 bg-emerald-100 rounded w-1/2 mb-4",
  skeletonButton: "h-10 bg-emerald-100 rounded w-full",
  
  // Services grid
  servicesGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8",
  
  // Empty state
  emptyState: "col-span-full text-center py-10 text-emerald-800 font-medium text-base",
};

export const serviceCardStyles = {
  // Card container
  card: "group rounded-2xl overflow-hidden bg-white shadow-xl hover:-translate-y-2 transition-transform duration-500 border border-emerald-100",
  
  // Image container
  imageContainer: "w-full overflow-hidden bg-emerald-50/30 flex items-center justify-center",
  
  // Images
  picture: "w-full",
  responsiveImage: "w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover object-center transform group-hover:scale-105 transition-transform duration-500",
  fallbackImage: "w-full h-60 sm:h-48 md:h-56 lg:h-60 object-cover object-center transform transition-transform duration-500",
  
  // Content
  content: "p-5 text-center",
  serviceName: "text-lg md:text-sm whitespace-nowrap font-semibold font-serif text-emerald-900",
  
  // Buttons
  buttonContainer: "mt-4",
  buttonAvailable: "inline-flex items-center justify-center gap-2 px-5 py-2 w-full rounded-full bg-emerald-500 text-white font-medium",
  buttonUnavailable: "px-5 py-2 w-full flex items-center justify-center gap-2 rounded-full bg-gray-200 text-gray-500 cursor-not-allowed border",
};



// Testimonial styles
export const testimonialStyles = {
  // Main container
  container: "min-h-[70vh] bg-linear-to-br from-slate-50 to-blue-50 py-10 px-4 relative overflow-hidden",
  
  // Header
  headerContainer: "max-w-6xl font-serif mx-auto text-center mb-8 sm:mb-12",
  title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-green-600 mb-3",
  subtitle: "text-sm sm:text-base text-gray-600 max-w-3xl mx-auto",
  
  // Testimonial grid
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch",
  
  // Column container
  columnContainer: "relative font-serif border-2 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm",
  leftColumnBorder: "border-blue-200",
  rightColumnBorder: "border-green-200",
  
  // Column header
  columnHeader: "py-2 font-semibold text-md sm:text-lg rounded-t-2xl text-center",
  leftColumnHeader: "bg-blue-100 text-blue-700",
  rightColumnHeader: "bg-green-100 text-green-700",
  
  // Scroll container
  scrollContainer: "h-56 sm:h-72 md:h-[360px] lg:h-[400px] overflow-y-hidden no-scrollbar p-3 sm:p-4",
  
  // Testimonial card
  testimonialCard: "bg-white font-[pacifico] rounded-xl shadow-lg p-4 sm:p-5 mb-4 transition-transform duration-300 border-l-4 w-full max-w-xl mx-auto",
  leftCardBorder: "border-blue-400 hover:shadow-blue-100",
  rightCardBorder: "border-green-400 hover:shadow-green-100",
  
  // Card content
  cardContent: "flex items-start space-x-3 sm:space-x-4",
  avatar: "w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full border border-gray-200 shadow-sm",
  textContainer: "flex-1",
  nameRoleContainer: "flex items-center justify-between gap-3",
  name: "font-semibold text-sm sm:text-base",
  leftName: "text-blue-800",
  rightName: "text-green-800",
  role: "text-xs sm:text-sm text-gray-600",
  quote: "text-gray-700 italic text-sm sm:text-base mt-2 leading-tight",
  
  // Stars
  starsContainer: "hidden sm:flex items-center gap-1",
  mobileStarsContainer: "flex sm:hidden mt-3",
  starContainer: "inline-block",
  star: "w-4 h-4 inline-block",
  activeStar: "text-yellow-400",
  inactiveStar: "text-gray-300",
  
  // Animation styles (to be added via style tag)
  animationStyles: `
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    
    /* subtle responsive tweaks */
    @media (max-width: 640px) {
      .min-h-[70vh] { min-height: auto; }
    }
    
    /* Respect reduced motion */
    @media (prefers-reduced-motion: reduce) {
      * { animation: none !important; transition: none !important; }
    }
  `
};

// Add to existing dummyStyles.js

export const serviceDetailStyles = {
  // Page container
  pageContainer: "min-h-screen font-serif bg-linear-to-br from-emerald-50 via-white to-green-50 px-4 lg:px-12 pt-20 sm:pt-12 md:pt-8 lg:pt-0",
  
  // Navigation bar
  navBar: "backdrop-blur-lg top-0 z-20",
  navContainer: "max-w-6xl mx-auto h-16 flex items-center justify-between px-4",
  backButton: "inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-600 border border-emerald-200 rounded-full hover:bg-emerald-50",
  
  // Main grid layout
  mainGrid: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-6",
  
  // Left column
  leftColumn: "space-y-8",
  
  // Image
  imageContainer: "w-full h-56 sm:h-72 md:h-96 lg:h-[65vh] xl:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-white/50",
  image: "w-full h-full object-cover object-center transition-transform duration-500",
  
  // Details form
  detailsContainer: "bg-white p-6 rounded-2xl shadow-xl border border-emerald-100",
  detailsTitle: "text-lg font-semibold text-emerald-700 flex items-center gap-2 mb-4",
  detailsGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  
  // Input fields
  input: "px-4 py-3 rounded-full border border-emerald-200 focus:ring-2 focus:ring-emerald-300 w-full",
  invalidInput: "px-4 py-3 rounded-full border border-rose-500 focus:ring-2 focus:ring-emerald-300 w-full",
  emailInput: "px-4 py-3 rounded-full border border-emerald-200 focus:ring-2 focus:ring-emerald-300 w-full sm:col-span-2",
  
  // Payment method
  paymentLabel: "font-semibold text-emerald-800 block mb-2",
  paymentOptions: "inline-flex gap-2",
  paymentOption: (isSelected) => 
    `px-3 py-1 rounded-full cursor-pointer border ${isSelected ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-emerald-700 border-emerald-100"}`,
  paymentInput: "hidden",
  
  // Date selection
  dateSection: "mt-4",
  dateTitle: "text-xl font-semibold text-emerald-900 mb-2",
  dateScrollContainer: "overflow-x-auto -mx-2 px-2",
  dateButtonsContainer: "inline-flex gap-3 sm:flex sm:flex-wrap",
  dateButton: (isSelected) => 
    `px-5 py-2 rounded-full cursor-pointer border transition whitespace-nowrap min-w-[140px] sm:min-w-0 ${isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-emerald-300 text-emerald-700 hover:bg-emerald-100"}`,
  
  // Time selection
  timeSection: "mt-4",
  timeTitle: "text-xl font-semibold text-emerald-900 mb-2",
  timeScrollContainer: "overflow-x-auto -mx-2 px-2",
  timeButtonsContainer: "inline-flex gap-3 sm:flex sm:flex-wrap",
  timeButton: (isSelected) => 
    `px-5 py-2 rounded-full cursor-pointer border transition whitespace-nowrap min-w-[140px] sm:min-w-0 flex items-center gap-2 ${isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-emerald-300 text-emerald-700 hover:bg-emerald-100"}`,
  noSlotsMessage: "text-emerald-600/80 p-2",
  
  // Submit button
  errorMessage: "text-rose-600 mb-2",
  successMessage: "text-emerald-700 mb-2",
  submitButton: (isValid, isSubmitting) => 
    `w-full py-4 md:mb-8 rounded-full cursor-pointer text-lg font-semibold flex items-center justify-center gap-3 transition ${isValid && !isSubmitting ? "bg-linear-to-br from-emerald-500 to-green-500 text-white shadow-lg hover:opacity-90" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
  
  // Right column
  rightColumn: "bg-white/80 rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 h-fit",
  serviceName: "text-2xl lg:text-3xl xl:text-3xl md:text-2xl sm:text-4xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
  
  // About section
  aboutContainer: "mt-6 bg-emerald-50 p-5 rounded-xl border border-emerald-100",
  aboutTitle: "flex items-center gap-3 text-md md:text-xl lg:text-xl xl:text-xl font-semibold text-emerald-900",
  aboutText: "text-emerald-800 mt-2",
  
  // Price display
  priceContainer: "mt-6 rounded-full flex items-center gap-3 bg-emerald-50 w-fit px-5 py-3 border border-emerald-100",
  priceText: "font-bold text-xl text-emerald-900",
  
  // Instructions
  instructionsContainer: "mt-8",
  instructionsTitle: "text-xl font-semibold text-emerald-900 mb-3",
  instructionsList: "list-disc pl-6 text-emerald-700 space-y-1",
  
  // Booking summary
  summaryContainer: "mt-8 bg-linear-to-r from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-100",
  summaryTitle: "text-lg font-semibold text-emerald-800 mb-4",
  summaryContent: "space-y-2 text-emerald-700 text-sm sm:text-base",
  summaryItem: "",
  
  // Loading and error states
  loadingContainer: "min-h-screen flex items-center justify-center p-8",
  loadingCard: "bg-white p-8 rounded-xl shadow-lg text-center",
  loadingTitle: "text-2xl font-semibold",
  loadingText: "mt-2 text-gray-600",
  backToServices: "inline-block mt-4 px-4 py-2 bg-emerald-600 text-white rounded-full",
};



// DoctorDetail styles
export const doctorDetailStyles = {
  // Main container
  pageContainer: "min-h-screen font-serif bg-linear-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden",
  
  // Loading/Error states
  loadingContainer: "min-h-screen flex items-center justify-center",
  errorContainer: "min-h-screen flex items-center justify-center",
  errorContent: "text-center",
  errorText: "text-red-600 mb-2",
  errorMessage: "text-gray-700",
  backButton: "inline-flex items-center gap-2 mt-4 px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all",
  backButtonIcon: "size={20}",
  
  // Not found state
  notFoundContainer: "min-h-screen flex items-center justify-center",
  notFoundContent: "text-center",
  notFoundEmoji: "text-6xl mb-4",
  notFoundTitle: "text-2xl font-bold text-gray-700",
  
  // Header
  headerContainer: "relative z-10 bg-white/80 backdrop-blur-lg border-b border-emerald-100 top-0",
  headerContent: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  headerFlex: "flex items-center justify-between h-16",
  headerBackButton: "inline-flex items-center gap-2 px-2 xl:px-4 lg:px-4 py-2 bg-white text-emerald-600 border border-emerald-200 rounded-full hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md",
  headerBackButtonIcon: "size={18}",
  headerBackButtonText: "font-medium",
  headerTitle: "text-sm md:text-2xl lg:text-xl xl:text-2xl whitespace-nowrap font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
  headerRatingContainer: "flex items-center gap-2 px-2 py-2 bg-white rounded-full shadow-sm border border-amber-100",
  headerRatingIcon: "text-amber-400 fill-current",
  headerRatingText: "font-semibold text-amber-600",
  
  // Main content wrapper
  mainContent: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 sm:pt-8 transition-all duration-700",
  visibleState: "opacity-100 translate-y-0",
  hiddenState: "opacity-0 translate-y-8",
  
  // Profile card
  profileCard: "bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden mb-8",
  profileGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 sm:p-8",
  
  // Left column (avatar)
  leftColumn: "lg:col-span-1 flex flex-col items-center space-y-6",
  avatarContainer: "relative",
  avatarGlow: "absolute -inset-2 sm:-inset-3 md:-inset-6 bg-linear-to-br from-emerald-400 to-green-400 rounded-full blur-lg opacity-50 animate-pulse",
  avatarImage: "relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 sm:border-6 md:border-8 border-white shadow-2xl z-10 transition-transform duration-300",
  statsGrid: "grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-4 w-full max-w-lg px-2",
  statBox: "text-center p-3 sm:p-4 bg-white rounded-2xl shadow-lg border border-emerald-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
  statIcon: "w-5 h-5 mx-auto mb-2",
  heartIcon: "text-rose-500",
  awardIcon: "text-amber-500",
  usersIcon: "text-emerald-500",
  statValue: "text-lg font-bold text-gray-800",
  statLabel: "text-xs text-gray-500",
  
  // Right column (doctor info)
  rightColumn: "lg:col-span-2 space-y-6",
  doctorName: "text-2xl md:text-2xl lg:text-3xl xl:text-3xl sm:text-4xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
  specializationBadge: "inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-emerald-400 to-green-500 text-white rounded-full text-sm font-semibold shadow-lg",
  badgeIcon: "w-4 h-4",
  
  // Info grid
  infoGrid: "grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4",
  infoItem: "flex items-start gap-3 md:p-3 p-4 bg-white rounded-full shadow-sm border border-emerald-50",
  infoIcon: "w-5 h-5 text-emerald-500 mt-1",
  infoLabel: "text-sm font-semibold text-emerald-600",
  infoValue: "text-gray-700 font-medium",
  feeValue: "text-lg font-bold text-rose-600",
  
  // About section
  aboutContainer: "p-6 bg-white rounded-2xl shadow-sm border border-emerald-50",
  aboutHeader: "flex items-center gap-2 mb-4",
  aboutIcon: "w-5 h-5 text-emerald-500",
  aboutTitle: "text-lg font-semibold text-emerald-700",
  aboutText: "text-gray-600 leading-relaxed",
  
  // Appointment section
  appointmentContainer: "bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden",
  appointmentContent: "p-6 sm:p-8",
  appointmentHeader: "flex items-center gap-3 mb-6",
  appointmentIcon: "w-6 h-6 text-emerald-500",
  appointmentTitle: "text-md md:text-2xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
  
  // Appointment grid
  appointmentGrid: "grid grid-cols-1 lg:grid-cols-2 gap-6",
  
  // Date selection
  dateSection: "space-y-6",
  dateTitle: "text-lg md:text-xl font-semibold text-emerald-700 flex items-center gap-2",
  dateTitleIcon: "w-5 h-5",
  dateScrollContainer: "overflow-x-auto -mx-2 px-2",
  dateButtonsContainer: "inline-grid grid-flow-col auto-cols-max gap-3 sm:grid sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-6",
  dateButton: "p-2 sm:p-3 rounded-full cursor-pointer border-2 transition-all whitespace-nowrap",
  dateButtonSelected: "bg-linear-to-br from-emerald-500 to-green-500 text-white border-emerald-500 shadow-lg",
  dateButtonUnselected: "bg-white text-gray-700 border-emerald-100",
  dateContent: "text-center",
  dateWeekday: "text-xs sm:text-sm opacity-80",
  dateDay: "text-xl sm:text-2xl font-bold",
  dateMonth: "text-xs opacity-80",
  
  // Patient form
  patientForm: "bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm",
  patientFormTitle: "text-lg font-semibold text-emerald-700 mb-4",
  patientFormGrid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  formInput: "p-3 rounded-full border border-emerald-200 w-full",
  emailInput: "p-3 rounded-full border border-emerald-200 w-full md:col-span-2",
  formSelect: "p-3 rounded-full border border-emerald-200 w-full",
  
  // Time slots
  timeSlotsSection: "space-y-6",
  timeSlotsTitle: "text-lg font-semibold text-emerald-700 flex items-center gap-2",
  timeSlotsIcon: "w-5 h-5",
  timeSlotsContainer: "flex gap-3 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3",
  noSlotsMessage: "text-gray-500",
  timeSlotButton: "min-w-[140px] p-2 rounded-full border-2",
  timeSlotButtonSelected: "bg-linear-to-br from-emerald-500 to-green-500 text-white border-emerald-500",
  timeSlotButtonUnselected: "bg-white text-gray-700 border-emerald-100",
  timeSlotContent: "flex items-center justify-center gap-2",
  timeSlotIcon: "w-4 h-4",
  
  // Summary section
  summaryContainer: "bg-linear-to-r from-emerald-50 to-green-50 p-4 sm:p-6 rounded-2xl border border-emerald-100",
  summaryItem: "space-y-3 mb-4 sm:mb-6",
  summaryRow: "flex justify-between",
  summaryLabel: "text-md text-gray-600",
  summaryValue: "font-semibold text-emerald-700 text-sm sm:text-base",
  feeDisplay: "font-bold text-rose-600",
  
  // Payment method
  paymentContainer: "mb-3 flex items-center gap-3",
  paymentLabel: "text-sm font-medium text-emerald-700",
  paymentOptions: "inline-flex gap-2",
  paymentOption: "px-3 py-1 rounded-full cursor-pointer border",
  paymentOptionSelected: "bg-emerald-600 text-white border-emerald-600",
  paymentOptionUnselected: "bg-white text-emerald-700 border-emerald-100",
  paymentRadio: "hidden",
  
  // Booking button
  bookingButton: "w-full py-3 sm:py-4 px-4 rounded-full font-semibold text-sm cursor-pointer transition-all",
  bookingButtonEnabled: "bg-linear-to-r from-emerald-500 to-green-500 text-white",
  bookingButtonDisabled: "bg-gray-300 text-gray-500",
  bookingButtonContent: "flex items-center justify-center gap-3",
  bookingIcon: "w-5 h-5",
  
  // Toast container
  toastContainer: "ToastContainer"
};



export const navbarStylesDr = {
  // Main navbar
  navContainer: "fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full md:max-w-2xl lg:max-w-4xl px-4 py-0 rounded-full bg-white/80 backdrop-blur-md border border-emerald-100 shadow-2xl flex items-center justify-between gap-3 font-serif transition-all duration-300 hover:shadow-emerald-200/80 hover:-translate-y-0.5",
  
  // Left brand section
  leftBrand: "flex items-center gap-3",
  logoContainer: "w-20 h-20 flex items-center justify-center rounded-full transform transition-all duration-300 hover:rotate-1 overflow-hidden",
  logoImage: "w-full h-full object-contain p-1",
  brandTextContainer: "md:block",
  brandTitle: "text-3xl text-emerald-700 font-semibold tracking-wide",
  brandSubtitle: "text-xs text-emerald-600",
  
  // Desktop menu
  desktopMenu: "hidden lg:flex flex-1 justify-center",
  desktopMenuItems: "flex items-center gap-2 px-2",
  
  // Link styles
  baseLink: "relative flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 transform",
  activeLink: "bg-emerald-600 text-white shadow-lg scale-105 ring-2 ring-emerald-200",
  inactiveLink: "text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900 hover:-translate-y-0.5 hover:shadow",
  
  // Link content
  linkContent: "relative flex items-center gap-2",
  linkIcon: "opacity-90",
  linkText: "text-[13px]",
  
  // Right side actions
  rightActions: "flex items-center gap-3",
  
  // Logout button (desktop)
  logoutButtonDesktop: "hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-700 border border-emerald-200 shadow-sm text-sm font-semibold transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5",
  
  // Hamburger menu buttons
  hamburgerButtonMd: "md:hidden p-2 rounded-md hover:bg-emerald-50 transition-colors",
  hamburgerButtonLg: "hidden md:flex lg:hidden p-2 rounded-md hover:bg-emerald-50 transition-colors",
  
  // Mobile/tablet menu
  mobileMenuContainer: (isOpen) => 
    `lg:hidden fixed top-30 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl shadow-lg transform origin-top transition-all duration-200 ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-2 pointer-events-none"}`,
  
  mobileMenuContent: "flex flex-col p-3 gap-2",
  
  // Mobile nav links
  mobileBaseLink: "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150",
  mobileActiveLink: "bg-emerald-50 text-emerald-900",
  mobileInactiveLink: "text-emerald-800 hover:bg-emerald-50",
  
  // Mobile logout button
  mobileLogoutButton: "mt-2 px-4 py-2 rounded-full text-center bg-emerald-500 text-white font-semibold text-sm shadow-sm transition-transform duration-150 hover:scale-105 w-full",
  mobileLogoutContent: "flex items-center justify-center gap-2",
  
  // Spacer
  spacer: "h-20 lg:h-20",
  
  // Icon sizes
  iconSmall: "size={16}",
  iconMedium: "size={18}",
  iconLarge: "size={20}"
};



// ListPage styles
export const listPageStyles = {
  // Main container
  pageContainer: "min-h-screen pt-20 md:pt-25 lg:pt-25 font-serif p-4 sm:p-6 bg-linear-to-br from-emerald-50 to-white",
  
  // Content wrapper
  contentWrapper: "max-w-7xl mx-auto",
  
  // Header section
  headerContainer: "mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
  headerTitle: "text-xl sm:text-xl pt-5 md:pt-0 lg:pt-0 xl:pt-0 font-extrabold text-emerald-900",
  headerSubtitle: "text-xs sm:text-sm text-emerald-700",
  
  // Search and filter section
  searchFilterContainer: "flex flex-col pt-10 md:pt-0 sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto",
  searchContainer: "relative w-full sm:w-auto",
  searchIconContainer: "absolute inset-y-0 left-3 flex items-center pointer-events-none text-emerald-400",
  searchIcon: "w-4 h-4",
  searchInput: "pl-10 pr-10 w-full sm:w-64 md:w-80 lg:w-96 py-2 rounded-full border border-emerald-200 bg-white text-emerald-800 focus:ring-2 focus:ring-emerald-200 outline-none",
  clearSearchButton: "absolute right-2 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-900 p-1 rounded-full",
  clearSearchIcon: "w-4 h-4",
  statusFilter: "text-sm px-3 py-2 rounded-full border border-emerald-200 bg-white w-full sm:w-auto",
  
  // Loading and error states
  loadingContainer: "text-center py-8 text-emerald-600",
  errorContainer: "text-center py-8 text-rose-600",
  
  // Appointments grid
  appointmentsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start",
  
  // Appointment card
  appointmentCard: "rounded-2xl p-4 bg-white shadow-sm border border-emerald-100 hover:shadow-md transition flex flex-col justify-between self-start",
  
  // Card header
  cardHeader: "flex flex-col sm:flex-row items-start sm:items-center gap-3",
  cardAvatar: "w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center",
  cardAvatarImage: "w-full h-full object-cover",
  cardAvatarFallback: "text-emerald-700 font-bold",
  cardContent: "flex-1 min-w-0",
  cardPatientName: "text-sm md:text-lg font-bold text-emerald-900 truncate",
  cardPatientInfo: "text-xs md:text-sm text-emerald-700 mt-1",
  cardDoctorInfo: "mt-2 text-sm text-emerald-700 truncate",
  cardDoctorName: "font-semibold text-emerald-900",
  cardSpeciality: "text-sm text-emerald-800 font-medium truncate",
  
  // Date and time section
  dateTimeSection: "mt-4 flex flex-col items-start gap-3",
  dateTimeContainer: "text-md md:text-lg text-emerald-800 font-bold flex items-center gap-2 w-full",
  calendarIcon: "w-4 h-4",
  dateText: "whitespace-nowrap truncate",
  feeText: "text-sm text-emerald-800 font-semibold",
  
  // Contact and status section
  contactStatusSection: "mt-4 flex flex-col items-start gap-3",
  phoneContainer: "text-sm text-emerald-700 flex items-center gap-2",
  phoneIcon: "w-4 h-4",
  phoneNumber: "truncate",
  statusContainer: "flex items-center gap-2 w-full mt-2 justify-start",
  
  // Status badge
  statusBadgeBase: "px-3 py-1 rounded-full text-xs font-semibold",
  statusBadgeComplete: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  statusBadgeCancelled: "bg-rose-100 text-rose-800 border border-rose-200",
  statusBadgeConfirmed: "bg-emerald-200 text-emerald-900 border border-emerald-300",
  statusBadgeRescheduled: "bg-indigo-100 text-indigo-900 border border-indigo-200",
  statusBadgePending: "bg-yellow-100 text-amber-800 border border-amber-200 animate-pulse",
  
  // Status select
  statusSelect: "text-sm px-3 py-1 rounded-full border focus:outline-none transition",
  statusSelectEnabled: "bg-white text-emerald-800 border-emerald-200 hover:shadow-sm",
  statusSelectDisabled: "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200",
  
  // Reschedule button container
  rescheduleContainer: "mt-4",
  rescheduleButton: "text-sm px-3 py-1 rounded-full border transition",
  rescheduleButtonEnabled: "bg-white text-emerald-800 border-emerald-200 hover:shadow-sm",
  rescheduleButtonDisabled: "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed",
  
  // Reschedule form
  rescheduleForm: "flex flex-col md:flex-col items-end gap-2 w-full",
  dateInput: "text-sm px-3 py-2 rounded-full border border-emerald-200 bg-white w-full md:w-40",
  timeInput: "text-sm px-3 py-2 rounded-full border border-emerald-200 bg-white w-full md:w-36",
  rescheduleButtons: "flex gap-2",
  saveButton: "text-sm px-3 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition",
  cancelButton: "text-sm px-3 py-2 rounded-full border border-emerald-200 bg-white text-emerald-800 hover:shadow-sm transition"
};

// Add to existing dummyStyles.js

export const editProfilePageStyles = {
  // Page container
  pageContainer: "min-h-screen font-serif bg-linear-to-br from-emerald-50 via-white to-emerald-50/30 p-4 sm:p-5 md:p-6",
  maxWidthContainer: "max-w-6xl pt-8 md:pt-10 mx-auto relative",
  
  // Loading states
  loadingContainer: "min-h-screen flex items-center justify-center",
  loadingSpinner: "w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin mx-auto mb-4",
  loadingText: "text-gray-600",
  errorText: "text-red-600",
  
  // Toast notifications
  toastContainer: "fixed top-3 right-2 sm:right-4 z-50 space-y-3 max-w-xs sm:max-w-sm",
  toastBase: "transform transition-all duration-300 ease-out rounded-r-lg shadow-lg p-3 sm:p-4 flex items-start gap-3 animate-slideIn",
  toastSuccess: "bg-linear-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-500",
  toastError: "bg-linear-to-r from-rose-50 to-rose-100 border-l-4 border-rose-500",
  toastInfo: "bg-linear-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500",
  toastIcon: "w-5 h-5 mt-0.5",
  toastSuccessIcon: "text-emerald-600",
  toastErrorIcon: "text-rose-600",
  toastText: "text-sm font-medium text-gray-800",
  
  // Main card
  mainCard: "bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-emerald-100/50",
  headerBackground: "relative h-24 sm:h-28 md:h-32 bg-linear-to-r from-emerald-400 to-emerald-600",
  
  // Profile image
  imageContainer: "absolute -bottom-16 left-1/2 transform -translate-x-1/2 md:left-8 md:transform-none",
  imageWrapper: "relative group",
  profileImage: "relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 md:ml-23 rounded-full object-cover border-4 border-white shadow-2xl",
  imageEditButton: (editing) => `absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg cursor-pointer transition-transform ${!editing && "cursor-not-allowed"}`,
  imageEditIcon: (editing) => `w-5 h-5 ${editing ? "text-emerald-600" : "text-gray-400"}`,
  imageInput: "hidden",
  
  // Profile content
  profileContent: "pt-20 pb-8 px-4 sm:px-6 md:px-8",
  profileHeader: "flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8",
  profileInfo: "flex-1 min-w-0",
  profileName: "text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent truncate",
  profileSubtitle: "text-sm sm:text-lg text-emerald-700 mt-2 flex items-center gap-2",
  subtitleIcon: "w-4 h-4",
  
  // Stats container
  statsContainer: "mt-4 flex flex-wrap items-center gap-3",
  statItem: "flex items-center gap-3 bg-white px-3 py-2 rounded-full border border-emerald-100 shadow-sm text-sm sm:text-base",
  ratingStatItem: "flex items-center gap-3 bg-linear-to-r from-amber-50 to-amber-100 px-3 py-2 rounded-full border border-amber-200 text-sm sm:text-base",
  feeStatItem: "flex items-center gap-1 bg-linear-to-r from-amber-50 to-amber-100 px-3 py-2 rounded-full border border-amber-200",
  statIcon: "w-4 h-4",
  statEmeraldIcon: "text-emerald-600",
  statAmberIcon: (field) => {
    if (field === 'star') return "w-5 h-5 text-amber-500 fill-amber-500";
    return "w-4 h-4 text-amber-600";
  },
  statLabel: "text-xs text-emerald-600 font-medium",
  statAmberLabel: "text-xs text-amber-700 font-medium",
  statValue: "text-sm font-semibold text-emerald-900 truncate",
  statAmberValue: "text-sm font-bold text-amber-800",
  statInput: "w-20 rounded-full border px-2 py-1 text-sm focus:outline-none",
  statPatientsInput: "w-24 rounded-full border px-2 py-1 text-sm focus:outline-none",
  
  // Action buttons
  actionButtons: "flex flex-col sm:flex-row items-center gap-3",
  availabilityToggle: (isAvailable) => `flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full cursor-pointer border-2 shadow-sm transition-all duration-300 ${isAvailable ? "bg-linear-to-r from-emerald-50 to-emerald-100 border-emerald-300 hover:shadow-emerald-200" : "bg-linear-to-r from-gray-50 to-gray-100 border-gray-300 hover:shadow-gray-200"} hover:shadow-lg w-full sm:w-auto`,
  toggleTrack: (isAvailable) => `relative w-10 h-5 rounded-full transition-colors ${isAvailable ? "bg-emerald-500" : "bg-gray-400"}`,
  toggleThumb: (isAvailable) => `absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${isAvailable ? "left-6" : "left-0.5"}`,
  toggleText: (isAvailable) => `font-medium ${isAvailable ? "text-emerald-700" : "text-gray-600"}`,
  
  editButton: "group relative overflow-hidden bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-5 py-2 rounded-full cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto",
  editButtonContent: "relative flex items-center gap-2",
  
  // Form sections
  formSection: "mb-8",
  sectionTitle: "text-xl sm:text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2",
  sectionIconContainer: "w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center",
  sectionIcon: "w-4 h-4 text-emerald-600",
  
  // Field grid
  fieldGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
  fieldGroup: "group",
  fieldHeader: "flex items-center gap-3 mb-2",
  fieldIconContainer: (editing) => `p-2 rounded-full ${editing ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-500"}`,
  fieldIcon: "w-4 h-4",
  fieldLabel: "text-sm font-semibold text-emerald-800",
  
  // Input fields
  inputBase: (editing) => `w-full rounded-full border-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base transition-all duration-200 ${editing ? "border-emerald-200 bg-emerald-50/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 focus:bg-white" : "border-gray-200 bg-gray-50/50 text-gray-600 cursor-not-allowed"}`,
  
  // About textarea
  aboutTextarea: (editing) => `w-full rounded-xl border-2 px-4 py-3 text-sm sm:text-base transition-all duration-200 ${editing ? "border-emerald-200 bg-emerald-50/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 focus:bg-white" : "border-gray-200 bg-gray-50/50 text-gray-600 cursor-not-allowed"}`,
  aboutCharCount: "absolute bottom-3 right-3 text-xs text-gray-400",
  
  // Schedule section
  scheduleHeader: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
  emptySchedule: "text-center py-10 rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/50",
  emptyScheduleIcon: "w-12 h-12 text-emerald-400 mx-auto mb-3",
  emptyScheduleText: "text-emerald-700 font-medium",
  emptyScheduleSubtext: "text-sm text-emerald-600 mt-1",
  
  // Schedule grid
  scheduleGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",
  
  // Date card
  dateCard: "group relative bg-linear-to-br from-white to-emerald-50 p-4 sm:p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
  dateHeader: "flex items-center justify-between mb-3 pb-3 border-b border-emerald-100",
  dateIconContainer: "p-2 rounded-full bg-emerald-100",
  dateIcon: "w-5 h-5 text-emerald-600",
  dateTitle: "font-bold text-base sm:text-lg text-emerald-900",
  dateSubtitle: "text-xs sm:text-sm text-emerald-600",
  dateSlotCount: "text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700",
  dateDeleteButton: (editing) => `p-2 rounded-full cursor-pointer transition-colors ${editing ? "hover:bg-rose-50 text-rose-500 hover:text-rose-600" : "text-gray-400 cursor-not-allowed"}`,
  dateDeleteIcon: "w-4 h-4",
  
  // Time slots
  timeSlotContainer: "space-y-3",
  timeSlotItem: "flex items-center justify-between bg-white px-3 py-2 rounded-full border border-emerald-100 hover:border-emerald-200 transition-colors",
  timeSlotIcon: "w-4 h-4 text-emerald-600",
  timeSlotText: "font-medium text-emerald-900 text-sm sm:text-base",
  timeSlotDeleteButton: (editing) => `p-1.5 rounded-full cursor-pointer transition-colors ${editing ? "hover:bg-rose-50 text-rose-500 hover:text-rose-600" : "text-gray-400 cursor-not-allowed"}`,
  timeSlotDeleteIcon: "w-4 h-4",
  
  // Add time slot
  addSlotContainer: "pt-3 border-t border-emerald-100",
  addSlotInput: "flex-1 rounded-full px-3 py-2 text-sm border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200",
  addSlotButton: "p-2 rounded-full cursor-pointer bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors",
  addSlotIcon: "w-4 h-4",
  
  // Save message
  saveMessage: (type) => `px-4 py-2 rounded-lg ${type === "saving" ? "bg-blue-50 text-blue-700 border border-blue-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`,
  
  // Actions section
  actionsSection: "flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-emerald-100",
  actionsText: "text-sm text-gray-500",
  actionsButtons: "flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto",
  resetButton: "px-6 py-3 rounded-full cursor-pointer border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 font-medium w-full sm:w-auto text-center",
  saveButton: "group relative overflow-hidden bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-full cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto text-center",
  saveButtonContent: "relative flex items-center gap-2 justify-center",
  saveSpinner: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
  
  // AddDate component styles
  addDateContainer: "flex items-center gap-2",
  addDateInput: "rounded-xl px-3 py-2 border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 text-sm sm:text-base",
  addDateButton: "flex items-center gap-2 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base",
  addDateIcon: "w-4 h-4",
  
  // Custom animations
  customCSS: `
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    .animate-slideIn { animation: slideIn 0.3s ease-out forwards; }
  `
};


// DashboardPage styles
export const dashboardStyles = {
  // Main container
  pageContainer: "min-h-screen font-serif pt-16 lg:pt-20 md:pt-15 p-4 sm:p-6 bg-linear-to-br from-emerald-50 to-white",
  
  // Content wrapper
  contentWrapper: "max-w-7xl mx-auto",
  
  // Header section
  headerContainer: "mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
  headerTitle: "text-2xl pt-10 xl:pt-0 uppercase lg:pt-0 sm:text-3xl font-extrabold tracking-tight text-emerald-900",
  headerSubtitle: "text-sm sm:text-base text-emerald-700/70",
  headerInfo: "text-sm text-slate-600",
  refreshButton: "text-sm px-3 py-1 rounded-full bg-white text-emerald-600 border border-emerald-200 hover:shadow-sm",
  
  // Stats grid
  statsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8",
  
  // Stat card
  statCard: "rounded-full p-4 bg-white/60 backdrop-blur-sm border border-emerald-300 shadow-sm hover:shadow-md transition-all",
  statContent: "flex items-center justify-between gap-4",
  statTextContainer: "flex-1",
  statTitle: "text-sm font-medium text-emerald-800/80",
  statValue: "mt-2 text-xl sm:text-2xl font-extrabold text-emerald-900 tracking-tight",
  statIconContainer: "p-3 rounded-full bg-linear-to-br border shadow-md",
  statIcon: "w-6 h-6 text-emerald-900",
  
  // Stat card accent colors
  accentTopEmerald: "from-emerald-200 to-emerald-300",
  accentTopAmber: "from-amber-100 to-amber-200",
  accentTopEmeraldLight: "from-emerald-100 to-emerald-200",
  accentTopRose: "from-rose-100 to-rose-200",
  accentBottomEmerald: "border-emerald-200",
  accentBottomAmber: "border-amber-200",
  accentBottomRose: "border-rose-200",
  
  // Appointments container
  appointmentsContainer: "bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100 shadow-sm",
  appointmentsHeader: "flex items-center justify-between mb-4",
  appointmentsTitle: "text-lg sm:text-xl font-semibold text-emerald-900",
  appointmentsTotal: "text-sm sm:text-base text-emerald-700 flex items-center gap-2",
  totalIcon: "w-4 h-4",
  
  // Cards grid
  cardsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start",
  
  // Appointment card
  appointmentCard: "rounded-xl p-4 bg-white shadow-sm border border-emerald-100 flex flex-col justify-between gap-4 hover:shadow-md transition self-start",
  cardHeader: "flex items-start gap-3",
  cardAvatar: "w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center",
  cardAvatarImage: "w-full h-full object-cover",
  cardAvatarFallback: "text-emerald-700 font-bold",
  cardContent: "flex-1",
  cardPatientName: "text-base sm:text-lg font-bold text-emerald-900",
  cardPatientInfo: "text-xs sm:text-sm text-emerald-700 mt-1",
  cardDoctorInfo: "mt-2 text-sm sm:text-sm text-emerald-700",
  cardDoctorName: "font-semibold text-emerald-900",
  cardSpeciality: "text-xs sm:text-sm text-emerald-800 font-medium",
  cardPhoneContainer: "mt-2 text-xs sm:text-sm text-emerald-600 flex items-center gap-2",
  cardPhoneIcon: "w-4 h-4",
  
  // Date and time section
  dateTimeContainer: "flex items-center justify-between",
  dateText: "text-sm sm:text-lg font-bold text-emerald-800",
  timeText: "text-sm sm:text-base font-semibold text-emerald-900",
  
  // Card footer
  cardFooter: "flex flex-col items-end gap-2",
  feeText: "text-sm sm:text-base text-emerald-800 font-medium",
  statusContainer: "flex items-center gap-2",
  
  // Show more button
  showMoreContainer: "mt-4 flex justify-center",
  showMoreButton: "px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition",
  
  // Status badge (reusing listPageStyles but adding here for completeness)
  statusBadgeBase: "px-3 py-1 rounded-full text-xs font-semibold",
  statusBadgeComplete: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  statusBadgeCancelled: "bg-rose-100 text-rose-800 border border-rose-200",
  statusBadgeConfirmed: "bg-emerald-200 text-emerald-900 border border-emerald-300",
  statusBadgeRescheduled: "bg-indigo-100 text-indigo-900 border border-indigo-200",
  statusBadgePending: "bg-yellow-100 text-amber-800 border border-amber-200 animate-pulse",
  
  // Status select
  statusSelect: "text-xs sm:text-sm px-3 py-1 rounded-full border focus:outline-none transition",
  statusSelectEnabled: "bg-white text-emerald-800 border-emerald-200 hover:shadow-sm",
  statusSelectDisabled: "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200",
  
  // Reschedule button
  rescheduleButton: "text-xs px-3 py-1 rounded-full border transition",
  rescheduleButtonEnabled: "bg-white text-emerald-800 border-emerald-200 hover:shadow-sm",
  rescheduleButtonDisabled: "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed",
  
  // Reschedule form
  rescheduleForm: "flex flex-col items-end gap-2 w-full",
  rescheduleDateInput: "text-xs px-3 py-2 rounded-full border border-emerald-200 bg-white w-full md:w-48 lg:w-56",
  rescheduleTimeInput: "text-xs px-3 py-2 rounded-full border border-emerald-200 bg-white w-full md:w-48 lg:w-56",
  rescheduleButtons: "flex gap-2",
  saveButton: "text-xs px-3 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition",
  cancelButton: "text-xs px-3 py-2 rounded-full border border-emerald-200 bg-white text-emerald-800 hover:shadow-sm transition"
};