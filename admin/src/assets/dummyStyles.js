// assets/dummyStyles.js
export const doctorDetailStyles = {
  // Layout styles
  pageContainer: "min-h- font-serif bg-linear-to-br from-emerald-50 via-white to-green-50 p-4 sm:p-6",
  maxWidthContainer: "max-w-4xl mx-auto",
  maxWidthContainerLg: "max-w-6xl mx-auto",
  maxWidthContainerXL: "max-w-9xl",
  
  // Header styles
  headerContainer: "text-center mb-12",
  headerFlexContainer: "flex flex-col sm:flex-row justify-center items-center gap-3 mb-4",
  headerIconContainer: "p-3 bg-emerald-500 rounded-full shadow-lg",
  headerTitle: "text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mt-2 sm:mt-0",
  
  // Form styles
  formContainer: "bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-2xl p-6 sm:p-8 rounded-3xl mb-16",
  formGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  
  // Input styles
  inputBase: "p-3 rounded-full border-2 border-emerald-100 bg-white placeholder:text-gray-400 shadow-sm w-full focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all",
  textareaBase: "p-3 rounded-xl border-2 border-emerald-100 bg-white placeholder:text-gray-400 shadow-sm w-full focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all",
  inputWithIcon: "pr-12",
  
  // File upload styles
  fileInput: "w-40 md:w-[180px] border-2 border-emerald-100 rounded-full p-2 text-sm bg-white focus:border-emerald-400 transition",
  imagePreview: "h-12 w-12 md:h-16 md:w-16 rounded-full shadow-md border-2 border-emerald-200 object-cover",
  removeImageButton: "absolute -top-2 -right-1.5 bg-rose-500 text-white rounded-full p-1 transition",
  
  // Password field styles
  passwordToggleButton: "absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full",
  
  // Schedule section styles
  scheduleContainer: "p-6 bg-emerald-50 rounded-2xl border border-emerald-100",
  scheduleHeader: "flex items-center gap-3 mb-4",
  scheduleTitle: "text-lg font-semibold text-emerald-800",
  scheduleInputsContainer: "flex flex-wrap items-center gap-3",
  scheduleDateInput: "p-3 rounded-full border-2 border-emerald-100 w-full sm:w-auto",
  scheduleTimeSelect: "p-3 rounded-full border-2 border-emerald-100 w-full sm:w-auto",
  addSlotButton: "px-5 py-3 bg-emerald-500 text-white rounded-full flex items-center gap-2 w-full sm:w-auto justify-center",
  slotsGrid: "mt-4 space-y-2 max-w-9xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4",
  slotItem: "flex justify-between items-center bg-emerald-50 p-3 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md text-emerald-800",
  
  // Submit button styles
  submitButtonContainer: "md:col-span-2 flex justify-center mt-6",
  submitButton: "px-8 py-4 rounded-full font-semibold shadow-xl w-full md:w-auto",
  submitButtonEnabled: "bg-linear-to-r from-emerald-500 to-cyan-500 text-white",
  submitButtonDisabled: "opacity-60 cursor-not-allowed",
  
  // Toast styles
  toastContainer: "fixed top-6 right-3 left-3 sm:right-6 sm:left-auto p-4 rounded-xl shadow-xl flex items-center gap-3",
  toastSuccess: "bg-emerald-50 border border-emerald-200 text-emerald-700",
  toastError: "bg-rose-50 border border-rose-200 text-rose-700",
  
  // Doctor list styles
  doctorListContainer: "max-w-4xl mx-auto mt-8",
  doctorListGrid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  doctorCard: "p-4 rounded-xl border bg-white/80 shadow",
  doctorCardContent: "flex items-center gap-3",
  doctorImage: "h-12 w-12 rounded-full object-cover",
  doctorName: "font-semibold",
  doctorSpecialization: "text-sm text-gray-500",
  
  // Labels and text
  label: "block text-sm font-medium text-gray-700 mb-2",
  emptyState: "text-center text-gray-500",
  
  // Cursor utilities
  cursorPointer: "cursor-pointer",
  cursorNotAllowed: "cursor-not-allowed",
};

// assets/dummyStyles.js

export const pageStyles = {
  container: "min-h-screen font-serif bg-emerald-50 p-3 sm:p-4 md:p-6 lg:p-8",
  maxWidthContainer: "max-w-[1400px] mx-auto",
  
  headerContainer: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6",
  headerTitleSection: "w-full sm:w-auto",
  headerTitle: "text-xl sm:text-2xl font-semibold text-emerald-800",
  headerSubtitle: "text-xs sm:text-sm text-emerald-600",
  headerControlsSection: "w-full sm:w-auto",
  
  searchContainer: "flex items-center bg-white rounded-full px-3 py-2 shadow-sm w-full sm:w-72",
  searchIcon: "text-emerald-400",
  searchInput: "ml-3 w-full outline-none text-emerald-700 placeholder-emerald-400 bg-transparent text-sm",
  
  filterContainer: "flex items-center flex-col md:flex-row lg:flex-row gap-2 w-full sm:w-auto",
  dateFilter: "bg-white rounded-full px-3 py-2 shadow-sm flex items-center gap-2 w-full sm:w-auto",
  dateFilterIcon: "text-emerald-400",
  dateInput: "text-sm outline-none text-emerald-700 bg-transparent w-full",
  
  selectFilter: "text-sm px-3 py-2 cursor-pointer rounded-full bg-emerald-100 shadow-sm outline-emerald-300 w-full sm:w-auto",
  clearButton: "ml-0 sm:ml-2 px-3 cursor-pointer py-2 rounded-full bg-emerald-600 text-white text-sm shadow-sm hover:opacity-95 transition w-full sm:w-auto",
  
  loadingErrorContainer: "col-span-full text-center text-emerald-600 py-12 rounded-lg bg-white/60 border border-emerald-100",
  errorContainer: "col-span-full text-center text-rose-600 py-6 rounded-lg bg-white/60 border border-rose-100",
  noResultsContainer: "col-span-full text-center text-emerald-600 py-12 rounded-lg bg-white/60 border border-emerald-100",
  
  gridContainer: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
  
  card: "bg-white rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm border border-emerald-100 flex flex-col gap-3 hover:shadow-md transform hover:-translate-y-1 transition",
  cardHeader: "flex items-start lg:line-clamp-2 justify-between gap-3",
  cardTitle: "text-base sm:text-lg font-medium text-emerald-800 truncate",
  patientInfo: "text-xs sm:text-sm text-emerald-500 flex items-center gap-2",
  doctorInfo: "mt-1 text-xs sm:text-sm text-emerald-600 truncate",
  doctorSpeciality: "font-medium text-emerald-700",
  
  feeLabel: "text-nd lg:pt-3 lg:justify-start flex items-center font-bold text-emerald-700 text-xs sm:text-sm",
  feeAmount: "text-lg sm:text-xl font-semibold lg:justify-start text-emerald-800 flex items-center justify-end gap-1",
  
  slotContainer: "inline-flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full",
  slotIcon: "text-emerald-400",
  
  statusBadge: "text-xs px-3 py-1 rounded-full",
  
  cancelButton: (isDisabled, isCompleted) => 
    `px-3 py-2 cursor-pointer rounded-full text-sm flex items-center gap-2 transition ${
      isDisabled
        ? "bg-rose-50 text-rose-400 opacity-60 cursor-not-allowed"
        : "bg-rose-50 text-rose-700 hover:scale-105"
    }`,
  
  showMoreButton: "px-4 py-2 cursor-pointer rounded-full bg-white border border-emerald-200 shadow-sm hover:shadow-md transition",
};

export const statusClasses = (status) => {
  const s = (status || "").toLowerCase();
  if (s === "confirmed")
    return "bg-cyan-50 text-cyan-700 border border-cyan-100";
  if (s === "completed")
    return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (s === "rescheduled")
    return "bg-yellow-50 text-yellow-700 border border-yellow-100";
  if (s === "canceled" || s === "cancelled")
    return "bg-rose-50 text-rose-700 border border-rose-100";
  // default: pending
  return "bg-emerald-50 text-emerald-700 border border-emerald-100";
};

export const keyframesStyles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(8px) scale(.995); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
`;

// Add to the existing dummyStyles.js file
export const dashboardStyles = {
  // Layout styles
  pageContainer: "min-h-screen font-serif p-4 sm:p-6 bg-linear-to-br from-green-50 via-green-100 to-white",
  maxWidthContainer: "max-w-7xl mx-auto",
  
  // Header styles
  headerContainer: "flex items-center justify-between mb-6",
  headerTitle: "text-2xl md:text-3xl font-bold text-gray-800",
  headerSubtitle: "text-sm text-slate-600 mt-1",
  
  // Stats section styles
  statsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6",
  statCard: "p-4 rounded-full bg-linear-to-br from-emerald-100 to-emerald-50 shadow-sm border border-green-100",
  statCardContent: "flex items-center gap-3",
  statIconContainer: "p-2 bg-white/80 rounded-full shadow-inner",
  statLabel: "text-sm text-slate-600",
  statValue: "text-xl font-semibold text-slate-800",
  
  // Search section styles
  searchLabel: "block text-lg text-slate-600 mb-2",
  searchContainer: "flex items-center gap-3 max-w-md",
  searchInputContainer: "relative flex-1",
  searchInput: "pl-10 pr-4 py-2 rounded-full shadow-sm border border-green-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-200 w-full",
  searchIcon: "absolute left-3 top-2.5 w-5 h-5 text-green-500",
  clearButton: "px-3 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600",
  
  // Doctors table styles
  tableContainer: "bg-white rounded-2xl shadow overflow-hidden",
  tableHeader: "px-6 py-4 border-b border-green-50 flex items-center justify-between",
  tableTitle: "text-lg font-semibold text-slate-800",
  tableCount: "text-sm text-slate-500",
  errorContainer: "px-6 py-4 border-b border-green-50 text-sm text-rose-600",
  tableWrapper: "hidden md:block overflow-x-auto",
  table: "min-w-full divide-y divide-green-50",
  tableHead: "bg-green-50",
  tableHeaderCell: "px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider",
  tableBody: "bg-white divide-y divide-green-50",
  tableRow: "group transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
  tableRowEven: "bg-white",
  tableRowOdd: "bg-green-50/40",
  tableCell: "px-6 py-4 whitespace-nowrap",
  tableCellFlex: "flex items-center gap-4",
  verticalLine: "w-1 h-12 rounded-md mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-b from-emerald-400 to-green-200",
  doctorImage: "w-12 h-12 rounded-full object-cover border-2 border-green-100",
  doctorName: "text-sm font-medium text-slate-800",
  doctorId: "text-xs text-slate-500 mt-0.5",
  doctorSpecialization: "text-sm text-slate-600",
  feeText: "text-sm text-right text-slate-700",
  appointmentsText: "text-sm text-center text-slate-700",
  completedText: "text-sm text-center text-emerald-600",
  canceledText: "text-sm text-center text-rose-500",
  earningsText: "text-sm text-right font-semibold text-slate-800",
  
  // Mobile view styles
  mobileDoctorContainer: "md:hidden px-4 py-4",
  mobileDoctorGrid: "space-y-3",
  mobileDoctorCard: "bg-white rounded-xl shadow p-3 border border-green-50",
  mobileDoctorHeader: "flex items-center justify-between",
  mobileDoctorImage: "w-12 h-12 rounded-full object-cover",
  mobileDoctorName: "text-sm font-medium text-slate-800",
  mobileDoctorSpecialization: "text-xs text-slate-500",
  mobileDoctorFee: "text-sm text-slate-700 font-semibold",
  mobileStatsGrid: "mt-3 grid grid-cols-3 gap-3 text-center",
  mobileStatLabel: "text-xs text-slate-500",
  mobileStatValue: "text-sm font-semibold text-slate-800",
  mobileEarningsContainer: "mt-3 flex items-center justify-between text-sm text-slate-700",
  
  // Show more button styles
  showMoreContainer: "px-6 py-4 border-t border-green-50 flex justify-center",
  showMoreButton: "px-4 py-2 rounded-full bg-white border border-green-200 shadow-sm hover:bg-green-50 transition",
  
  // Cursor utilities
  cursorPointer: "cursor-pointer",
  cursorNotAllowed: "cursor-not-allowed",
  
  // Text colors (for reuse)
  textSlate600: "text-slate-600",
  textSlate700: "text-slate-700",
  textSlate800: "text-slate-800",
  textEmerald600: "text-emerald-600",
  textRose500: "text-rose-500",
  textRose600: "text-rose-600",
};

// assets/dummyStyles.js
export const addServiceStyles = {
  // Container styles
  container: {
    main: "min-h-screen font-serif bg-linear-to-br from-emerald-50 via-emerald-100 to-teal-50 relative flex items-center justify-center p-4 sm:p-6 overflow-x-hidden",
    form: "w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-100/50 box-border"
  },

  // Header styles
  header: {
    title: "text-2xl sm:text-3xl font-extrabold text-transparent bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text",
    subtitle: "text-sm text-gray-500 mt-1"
  },

  // Button styles
  buttons: {
    reset: "w-full sm:w-auto px-4 py-2 cursor-pointer rounded-full bg-white border border-emerald-100 hover:shadow transition-shadow duration-200",
    submit: "inline-flex justify-center items-center gap-2 w-full sm:w-auto px-5 py-2 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-60",
    addInstruction: "inline-flex cursor-pointer items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors",
    uploadImage: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 hover:shadow transition-shadow",
    removeImage: "px-3 py-2 rounded-full bg-white border border-red-100 hover:shadow transition-shadow",
    addSlot: "w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-lg transition-all duration-200",
    slotRemove: "p-1 rounded-full xl:-mr-1 hover:bg-white transition-colors",
    toastClose: "p-1 rounded-full hover:bg-white/50 transition-colors"
  },

  // Image upload styles
  imageUpload: {
    container: (hasError) => 
      `w-full rounded-2xl p-4 ${
        hasError 
          ? "border-2 border-red-200 bg-linear-to-b from-red-50 to-orange-50" 
          : "bg-linear-to-b from-emerald-50 to-teal-50 border border-emerald-100"
      } shadow-inner flex flex-col items-center gap-4`,
    preview: "w-full h-56 rounded-xl overflow-hidden bg-white flex items-center justify-center border border-emerald-100",
    placeholder: "flex flex-col items-center text-emerald-400"
  },

  // Input/Form field styles
  formFields: {
    input: (hasError) => 
      `mt-2 w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 shadow-md transition-all ${
        hasError 
          ? "border-2 border-red-200" 
          : "border border-emerald-100 focus:ring-emerald-200"
      }`,
    textarea: (hasError) => 
      `mt-2 w-full px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 shadow-md resize-none transition-all ${
        hasError 
          ? "border-2 border-red-200" 
          : "border border-emerald-100 focus:ring-emerald-200"
      }`,
    select: "mt-2 w-full px-4 py-3 rounded-full border border-emerald-100 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-emerald-200 focus:outline-none",
    smallSelect: "mt-1 w-full px-3 py-2 rounded-full border border-emerald-100 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-emerald-200 focus:outline-none",
    timeSelect: "mt-1 w-full px-2 py-2 rounded-full border border-emerald-100 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-emerald-200 focus:outline-none",
    ampmSelect: "mt-1 w-full px-1 py-2 rounded-full border border-emerald-100 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-emerald-200 focus:outline-none"
  },

  // Instruction styles
  instructions: {
    container: (hasError) => 
      `mt-3 space-y-2 ${
        hasError 
          ? "ring-2 ring-red-100 rounded-xl p-2" 
          : ""
      } max-h-44 overflow-auto pr-2`,
    item: "flex items-start gap-3 my-2 bg-white rounded-full p-3 border border-emerald-50 shadow-sm hover:shadow transition-shadow min-w-0",
    input: "flex-1 min-w-0 px-3 py-2 rounded-full border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200",
    removeButton: "p-2 rounded-full hover:bg-red-50 transition-colors"
  },

  // Slots styles
  slots: {
    container: (hasError) => 
      `bg-linear-to-br from-white to-emerald-50 rounded-2xl p-4 ${
        hasError 
          ? "border-2 border-red-200" 
          : "border border-emerald-50"
      } shadow-sm`,
    slotItem: "flex items-center gap-2 bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-100 px-2 py-2 my-1 rounded-full shadow hover:shadow-md transition-shadow min-w-0",
    slotText: "text-xs whitespace-nowrap xl:text-xs lg:text-xs lg:whitespace-nowrap xl:whitespace-nowrap font-medium max-w-[180px] sm:max-w-[300px] md:max-w-[320px]"
  },

  // Toast notification styles
  toast: {
    container: "fixed top-6 right-6 z-50 w-full max-w-sm",
    toastBase: "flex items-start gap-4 p-4 rounded-2xl border shadow-xl transform transition-all duration-300",
    toastError: "bg-linear-to-r from-red-50 to-orange-50 border-red-100",
    toastInfo: "bg-linear-to-r from-blue-50 to-cyan-50 border-blue-100",
    toastSuccess: "bg-linear-to-r from-emerald-50 to-teal-50 border-emerald-100",
    iconContainer: (type) => {
      const styles = {
        error: "bg-linear-to-r from-red-100 to-orange-100 text-red-600",
        info: "bg-linear-to-r from-blue-100 to-cyan-100 text-blue-600",
        success: "bg-linear-to-r from-emerald-100 to-teal-100 text-emerald-600"
      };
      return `flex items-center justify-center w-10 h-10 rounded-full ${styles[type] || styles.success}`;
    },
    title: "font-semibold text-sm text-gray-800",
    message: "text-xs text-gray-600 mt-1 truncate"
  },

  // Label styles
  labels: {
    standard: "text-sm font-medium text-emerald-700",
    small: "text-xs text-gray-500"
  },

  // Grid/Spacing styles
  grids: {
    main: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    formFields: "grid grid-cols-1 md:grid-cols-2 gap-6",
    timeGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 mb-4",
    timeSubGrid: "grid grid-cols-3 gap-2 min-w-0",
    slotsGrid: "grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 overflow-auto gap-2 max-h-screen pr-2"
  },

  // Header action container
  headerActions: "flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-3",

  // Other reusable styles
  icon: {
    number: "font-semibold text-emerald-600",
    clock: "w-4 h-4 xl:w-6 xl:h-6 text-emerald-600",
    trash: "w-4 h-4 text-red-400",
    removeInstruction: "w-4 h-4 text-red-400"
  },

  // Custom CSS for animations and scrollbars
  customCSS: `
    @keyframes slideIn {
      from {
        transform: translateX(12px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .animate-slideIn {
      animation: slideIn 300ms ease both;
    }

    .max-h-44::-webkit-scrollbar,
    .max-h-36::-webkit-scrollbar,
    .overflow-auto::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }
    .max-h-44::-webkit-scrollbar-thumb,
    .max-h-36::-webkit-scrollbar-thumb,
    .overflow-auto::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.08);
      border-radius: 9999px;
    }
  `
};

// assets/dummyStyles.js - ADDING DOCTOR LIST STYLES

// ... (existing styles remain the same)

export const doctorListStyles = {
  container: "min-h-screen font-serif bg-emerald-50 p-4 sm:p-6 md:p-8",
  headerContainer: "max-w-6xl mx-auto mb-6",
  headerTopSection: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
  headerIconContainer: "flex items-center gap-3 w-full sm:w-auto",
  headerIcon: "p-2 rounded-full bg-white shadow-sm transform transition",
  headerIconSvg: "text-emerald-600",
  headerTitle: "text-base sm:text-lg font-semibold text-emerald-800",
  headerSubtitle: "text-sm sm:text-md text-emerald-600",
  
  headerSearchContainer: "w-full sm:w-auto mt-3 sm:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
  searchBox: "flex items-center w-full sm:w-96 bg-white rounded-full px-3 py-2 shadow-sm",
  searchIcon: "text-emerald-400",
  searchInput: "ml-3 w-full outline-none text-emerald-700 placeholder-emerald-400 bg-transparent",
  clearButton: "px-3 py-2 cursor-pointer rounded-full bg-emerald-600 text-white shadow hover:opacity-95 transition w-full sm:w-auto",
  
  filterContainer: "flex flex-wrap gap-2 pt-5",
  filterButton: (isActive, color) => {
    const base = "text-xs px-3 cursor-pointer py-1 rounded-full transition border";
    if (color === 'emerald') {
      return isActive
        ? `${base} bg-emerald-600 text-white border-emerald-600`
        : `${base} bg-white text-emerald-700 border-emerald-200`;
    } else if (color === 'red') {
      return isActive
        ? `${base} bg-red-600 text-white border-red-600`
        : `${base} bg-white text-red-600 border-red-100`;
    }
    return base;
  },
  
  loadingContainer: "text-center text-emerald-600 py-8",
  noResultsContainer: "text-center text-emerald-600 py-8",
  
  gridContainer: "max-w-6xl grid xl:grid-cols-2 lg:grid-cols-2 lg:gap-3 xl:gap-4 mx-auto space-y-4",
  
  article: "bg-linear-to-r from-emerald-100/50 to-white rounded-2xl shadow-md border border-emerald-100 overflow-hidden transition-all duration-300",
  articleContent: "flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 sm:p-4 md:p-5",
  
  doctorImage: "w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-emerald-200 shadow-sm mx-auto sm:mx-0",
  
  doctorInfoContainer: "flex-1 min-w-0 w-full",
  doctorHeader: "flex flex-col sm:flex-row sm:items-start items-start justify-between gap-3 w-full",
  doctorName: "text-base sm:text-lg md:text-xl text-emerald-800 font-medium truncate",
  
  availabilityBadge: (isAvailable) => 
    `ml-0 sm:ml-2 mt-2 sm:mt-0 inline-flex items-center gap-2 text-xs font-medium px-2 py-0.5 rounded-full ${
      isAvailable
        ? "bg-emerald-50 text-emerald-700"
        : "bg-red-50 text-red-600"
    }`,
  availabilityDot: (isAvailable) => 
    `w-2 h-2 rounded-full ${isAvailable ? "bg-emerald-600" : "bg-red-600"}`,
  
  doctorDetails: "text-sm text-emerald-600 truncate mt-2 sm:mt-1",
  
  ratingContainer: "flex items-center gap-3 mt-3 sm:mt-0 sm:ml-4",
  rating: "text-sm text-emerald-700 flex items-center gap-1",
  toggleButton: (isOpen) => 
    `p-2 rounded-full cursor-pointer bg-white shadow-sm transform transition ${
      isOpen ? "rotate-180" : "rotate-0"
    }`,
  
  statsContainer: "mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3",
  statsLabel: "text-xs text-emerald-500",
  statsValue: "text-sm text-emerald-700 font-medium flex items-center gap-2",
  
  actionContainer: "w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2",
  deleteButton: "px-3 py-1 cursor-pointer rounded-full bg-red-50 text-red-600 text-xs flex items-center gap-2 transition",
  feesLabel: "text-md font-bold text-emerald-700",
  feesValue: "text-sm text-emerald-800 font-medium flex items-center gap-1",
  
  expandableContent: "px-4 md:px-5 bg-white overflow-auto sm:overflow-visible",
  
  aboutSection: "col-span-2",
  aboutHeading: "text-md font-bold text-emerald-700 mb-1",
  aboutText: "text-sm text-emerald-600 break-words whitespace-normal",
  
  qualificationsHeading: "text-md text-emerald-700 font-bold",
  qualificationsText: "text-sm text-emerald-600 break-words whitespace-normal",
  
  scheduleHeading: "text-md text-emerald-700 font-bold",
  scheduleDate: "text-xs text-emerald-500",
  scheduleSlot: "text-xs px-3 py-1 rounded-full border border-emerald-100 shadow-sm break-words",
  
  statsSidebar: "col-span-1 flex flex-col sm:flex-row md:flex-col xl:flex-col lg:flex-col gap-3 items-start md:items-end",
  statsItemHeading: "text-md text-emerald-700 font-bold",
  statsItemValue: "text-sm text-emerald-700",
  locationValue: "text-sm sm:whitespace-nowrap whitespace-normal text-emerald-700",
  
  showMoreButton: "px-5 py-2 cursor-pointer rounded-full bg-white border border-emerald-300 shadow-sm hover:shadow-md transition",
  showMoreContainer: "col-span-full flex justify-center mt-4",
};

// Add to the existing dummyStyles.js file
export const navbarStyles = {
  // Layout styles
  header: "relative font-serif",
  navContainer: "mx-auto max-w-7xl lg:px-7 xl:px-2 px-4 py-5",
  flexContainer: "flex items-center justify-between",
  
  // Logo section styles
  logoContainer: "flex items-center gap-2",
  logoImage: "w-18 h-18 rounded-full",
  logoLink: "text-3xl xl:block lg:text-xs xl:text-xl font-bold text-green-700",
  logoSubtext: "text-xs xl:block text-gray-500",
  
  // Center navigation (desktop)
  centerNavContainer: "hidden lg:flex items-center justify-center relative",
  glowEffect: "glow relative rounded-3xl p-1 bg-linear-to-r from-emerald-100 via-emerald-200 to-emerald-100",
  centerNavInner: "relative flex items-center",
  centerNavScrollContainer: "center-inner relative whitespace-nowrap rounded-3xl bg-white/95 lg:px-2 px-4 py-2 flex items-center gap-2 shadow-lg border border-gray-100 overflow-x-auto",
  
  // Center nav items
  centerNavItemBase: "relative flex flex-col lg:text-xs lg:-mx-2 xl:text-md items-center gap-1 px-3 py-2 rounded-lg transition-all text-sm",
  centerNavItemActive: "text-emerald-400 font-semibold",
  centerNavItemInactive: "text-gray-700 hover:text-emerald-600",
  
  // Right section styles
  rightContainer: "flex items-center gap-3",
  signOutButton: "hidden lg:mx-1 lg:text-xs whitespace-nowrap xl:mx-1 lg:-mr-6 xl:mr-5 lg:flex px-4 py-2 cursor-pointer rounded-full bg-amber-500 text-white text-sm items-center gap-2 shadow-sm",
  loginButton: "px-3 py-2 cursor-pointer rounded-full border bg-white text-emerald-600 text-sm shadow-sm",
  
  // Mobile menu button
  mobileMenuButton: "lg:hidden p-2 rounded-full bg-white shadow",
  
  // Mobile menu overlay
  mobileOverlay: "fixed inset-0 z-10 lg:hidden",
  
  // Mobile menu container
  mobileMenuContainer: "mt-3 lg:hidden z-20 relative",
  mobileMenuInner: "rounded-xl bg-white shadow-md p-3 space-y-2 border",
  
  // Mobile menu items
  mobileItemBase: "flex items-center gap-3 px-2 py-2 rounded-md",
  mobileItemActive: "bg-emerald-50 text-emerald-600",
  mobileItemInactive: "hover:bg-gray-50",
  
  // Mobile auth section
  mobileAuthContainer: "pt-2 border-t mt-2",
  mobileSignOutButton: "w-full py-2 rounded-full border bg-amber-500 text-white font-medium",
  mobileLoginButton: "w-full cursor-pointer py-2 rounded-full border bg-white text-emerald-600 font-medium",
  
  // Indicator (for active navigation)
  indicator: "absolute bottom-0 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ease-out rounded-full",
  
  // Cursor utilities
  cursorPointer: "cursor-pointer",
  
  // Text colors
  textGreen700: "text-green-700",
  textGray500: "text-gray-500",
  textGray700: "text-gray-700",
  textEmerald600: "text-emerald-600",
  textEmerald400: "text-emerald-400",
  textWhite: "text-white",
  
  // Background colors
  bgWhite: "bg-white",
  bgAmber500: "bg-amber-500",
  bgEmerald50: "bg-emerald-50",
  bgEmerald100: "bg-emerald-100",
  bgEmerald200: "bg-emerald-200",
  
  // Border colors
  borderGray100: "border-gray-100",
  borderEmerald100: "border-emerald-100",
  
  // Shadow
  shadow: "shadow",
  shadowMd: "shadow-md",
  shadowLg: "shadow-lg",
  shadowSm: "shadow-sm",
};


// assets/dummyStyles.js

// ... existing AddService styles above ...

export const heroStyles = {
  // Container styles
  container: "min-h-screen font-sans bg-linear-to-b from-emerald-50 to-white",
  mainContainer: "flex items-center pt-28 justify-center px-6 py-16",
  section: "w-full max-w-4xl",
  
  // Background decoration styles
  decorativeBg: {
    container: "relative",
    blurBackground: "absolute -inset-8 -z-10 flex items-center justify-center",
    blurShape: "w-full h-44 md:h-56 rounded-3xl bg-emerald-100/60 blur-3xl"
  },
  
  // Content container
  contentBox: "bg-white/90 backdrop-blur-sm border border-emerald-100 rounded-3xl shadow-xl p-8 md:p-12 text-center",
  
  // Logo/Image styles
  logoContainer: "mx-auto mb-4 w-24 h-24 flex items-center justify-center",
  logo: "w-50 h-50 object-contain",
  
  // Text styles
  heading: "text-3xl md:text-4xl font-extrabold text-emerald-900 mb-2",
  description: "text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6",
  
  // Info cards styles
  infoCards: {
    container: "mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4",
    card: "p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-left",
    cardTitle: "font-semibold text-emerald-800",
    cardText: "text-sm text-gray-600 mt-1"
  }
};

// Add to the existing dummyStyles.js file
export const serviceListStyles = {
  // Layout styles
  pageContainer: "p-4 sm:p-6 max-w-6xl font-serif mx-auto min-h-screen bg-linear-to-b from-green-50 via-white to-white",
  
  // Header styles
  headerContainer: "flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4",
  headerTitle: "text-2xl md:text-3xl font-extrabold text-emerald-700",
  headerSubtitle: "text-sm text-emerald-500 mt-1",
  
  // Filter and search styles
  filterContainer: "flex flex-col md:flex-col items-stretch md:items-center gap-3 w-full md:w-auto",
  filterButtonsContainer: "inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-100 bg-white p-1",
  filterButton: "px-3 py-1 cursor-pointer rounded-full text-sm transition",
  filterButtonActive: "bg-emerald-600 text-white",
  filterButtonInactive: "text-emerald-700 bg-transparent",
  searchContainer: "relative w-full md:w-auto",
  searchIcon: "absolute inset-y-0 left-3 flex items-center pointer-events-none",
  searchIconSvg: "w-5 h-5 text-emerald-300",
  searchInput: "pl-12 pr-4 py-2 rounded-full border border-emerald-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 transition w-full md:w-72 bg-white",
  
  // Grid styles
  servicesGrid: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6",
  
  // Service card styles
  serviceCard: "bg-white rounded-2xl overflow-hidden transform transition hover:-translate-y-1 hover:shadow-2xl border border-emerald-50",
  serviceCardContent: "flex flex-col sm:flex-row sm:items-start gap-4 p-4 cursor-pointer",
  serviceImageContainer: "w-full sm:w-20 h-40 sm:h-20 rounded-lg overflow-hidden bg-emerald-50 ring-1 ring-emerald-50 flex-shrink-0",
  serviceImage: "w-full h-full object-cover",
  serviceImagePlaceholder: "w-full h-full flex items-center justify-center text-emerald-300",
  serviceInfoContainer: "flex-1 min-w-0",
  serviceHeader: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2",
  serviceName: "text-lg font-semibold text-emerald-700 truncate",
  serviceDescription: "text-sm text-emerald-500 mt-1 line-clamp-2",
  servicePriceContainer: "text-left sm:text-right mt-2 sm:mt-0",
  servicePrice: "text-md font-semibold text-emerald-700",
  availabilityBadge: "text-xs mt-1 inline-flex items-center gap-1 px-2 py-1 rounded-full",
  availabilityAvailable: "bg-emerald-50 text-emerald-700",
  availabilityUnavailable: "bg-rose-50 text-rose-700",
  slotsInfo: "mt-2 flex items-center gap-2 font-bold text-sm text-emerald-600",
  chevronContainer: "pl-3 self-start sm:self-center",
  chevronIcon: "w-6 h-6 transition-transform",
  chevronOpen: "rotate-180 text-emerald-400",
  chevronClosed: "text-emerald-300",
  
  // Details section
  detailsContainer: "px-4 pb-4 transition-all",
  
  // Edit form styles
  editForm: "space-y-4",
  editImageContainer: "flex flex-col sm:flex-row gap-4",
  editImagePreview: "w-full sm:w-36 h-36 rounded-lg overflow-hidden bg-emerald-50 ring-1 ring-emerald-50 flex-shrink-0",
  editFormFields: "flex-1 space-y-2",
  inputBase: "w-full border rounded-lg px-3 py-2 outline-none transition focus:ring-2 focus:ring-green-200 focus:border-green-300 border-green-100 bg-white",
  availabilitySelectContainer: "mt-1 flex items-center gap-2",
  availabilityLabel: "text-sm text-emerald-600",
  availabilitySelect: "border rounded-full cursor-pointer px-3 py-1 outline-none focus:ring-2 focus:ring-emerald-200 border-emerald-300",
  fileInputContainer: "mt-2",
  fileInputLabel: "text-sm block mb-1 text-emerald-700",
  fileInput: "w-full border border-emerald-300 rounded-full px-4 py-2 text-sm bg-white cursor-pointer file:bg-emerald-50 file:border-0 file:px-4 file:py-1 file:rounded-full file:text-emerald-700 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition",
  textarea: "min-h-[68px]",
  textareaInstructions: "min-h-[80px]",
  formLabel: "block text-md font-bold mb-1 text-emerald-600",
  formLabelSmall: "block text-sm text-emerald-600",
  
  // Slots management
  slotsHeader: "flex items-center justify-between",
  addSlotButton: "inline-flex cursor-pointer items-center gap-2 text-sm px-2 py-1 rounded-full border border-emerald-100",
  slotsContainer: "space-y-2 mt-2",
  slotRow: "flex flex-col sm:flex-row sm:items-center gap-2 w-full",
  slotDateInput: "border rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-emerald-200 border-emerald-100 w-full sm:w-auto",
  slotTimeContainer: "flex gap-2 items-center w-full sm:w-auto",
  slotSelect: "border rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-emerald-200 border-emerald-100 w-20",
  removeSlotButton: "px-2 py-1 rounded-full cursor-pointer border-red-500 bg-red-300 border text-sm text-black",
  
  // Form action buttons
  formActions: "flex flex-col sm:flex-row items-center gap-2 justify-end",
  cancelButton: "px-3 py-2 rounded-full cursor-pointer border-red-600 bg-red-300 border w-full sm:w-auto",
  saveButton: "px-3 py-2 rounded-full cursor-pointer bg-emerald-600 text-white w-full sm:w-auto",
  
  // View mode styles
  viewSection: "space-y-3",
  viewSectionTitle: "text-md font-bold text-emerald-700",
  viewSectionContent: "text-md text-emerald-500 mt-1",
  instructionsList: "list-disc list-inside text-md text-emerald-500 mt-1 space-y-1",
  slotsList: "mt-2 space-y-2 text-sm text-emerald-600",
  noSlotsMessage: "text-emerald-300",
  slotItem: "flex font-bold items-center gap-3",
  slotIcon: "w-4 h-4 text-emerald-400",
  
  // Action buttons (view mode)
  viewActions: "flex items-center gap-2 justify-end",
  editButton: "inline-flex bg-emerald-200 cursor-pointer items-center gap-2 px-3 py-2 rounded-full border border-emerald-300",
  removeButton: "inline-flex items-center bg-red-200 cursor-pointer gap-2 px-3 py-2 rounded-full border text-rose-600",
  
  // Empty state
  emptyState: "text-center text-emerald-300 mt-8",
  
  // Toast styles
  toastContainerTop: "fixed right-3 top-3 z-50 space-y-3",
  toastContainerBottom: "fixed right-3 bottom-3 z-50 space-y-3",
  toast: "transform transition-all",
  toastAnimated: "animate-bounce",
  toastInner: "max-w-sm px-4 py-3 rounded-lg shadow-lg border",
  toastSuccess: "bg-white border-emerald-100",
  toastError: "bg-white border-slate-100",
  toastContent: "flex items-start gap-3",
  toastIconSuccess: "text-emerald-500",
  toastIconError: "text-slate-400",
  toastIconSvg: "w-5 h-5",
  toastMessage: "flex-1 text-sm text-emerald-700",
  toastCloseButton: "text-emerald-300",
  toastCloseIcon: "w-4 h-4",
  
  // Text colors
  textEmerald300: "text-emerald-300",
  textEmerald400: "text-emerald-400",
  textEmerald500: "text-emerald-500",
  textEmerald600: "text-emerald-600",
  textEmerald700: "text-emerald-700",
  textRose600: "text-rose-600",
  textRose700: "text-rose-700",
  
  // Cursor utilities
  cursorPointer: "cursor-pointer",
  
  // Display utilities
  block: "block",
  hidden: "hidden",
};

// assets/dummyStyles.js - ADDING SERVICE APPOINTMENTS STYLES

// ... (existing styles remain the same)

export const serviceAppointmentsStyles = {
  container: "p-4 sm:p-6 md:p-6 font-serif",
  
  headerContainer: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6",
  headerTitleContainer: "min-w-0",
  headerTitle: "text-2xl md:text-3xl font-extrabold text-emerald-800",
  headerSubtitle: "text-sm text-gray-500 mt-1",
  
  searchContainer: "w-full md:w-96 flex flex-col gap-2",
  searchInputWrapper: "flex items-center gap-3",
  searchLabel: "relative block w-full",
  searchIconContainer: "absolute left-3 pointer-events-none",
  searchIcon: "w-4 h-4 text-emerald-400",
  searchInput: "pl-10 pr-10 w-full rounded-full border border-emerald-200 bg-white/90 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all",
  clearSearchButton: "absolute right-3 rounded-full p-1 hover:bg-gray-100",
  clearSearchIcon: "w-4 h-4 text-gray-500",
  
  statusFilterSelect: "text-sm px-3 py-2 cursor-pointer rounded-full border border-emerald-400",
  searchInfo: "mt-2 text-xs text-gray-500 flex items-center justify-between",
  refreshButton: "text-xs text-emerald-600 hover:underline",
  
  loadingContainer: "col-span-full rounded-2xl p-8 bg-white/90 border border-emerald-50 shadow-sm flex items-center justify-center gap-3",
  errorContainer: "col-span-full rounded-2xl p-4 bg-rose-50 border border-rose-100 text-rose-700",
  
  noResultsContainer: "col-span-full rounded-2xl p-8 bg-white/90 border border-emerald-50 shadow-sm flex items-center justify-center flex-col gap-3",
  noResultsIcon: "text-3xl text-emerald-300",
  noResultsText: "text-sm text-gray-600",
  noResultsSubtext: "text-xs text-gray-400",
  
  gridContainer: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch",
  
  article: "group relative rounded-3xl p-1 animated-border h-full transform transition-all duration-300 hover:-translate-y-2",
  cardInner: "card-inner rounded-2xl overflow-hidden border-2 border-emerald-300/60 p-5 bg-white/90 shadow-lg h-full flex flex-col justify-between",
  
  cardHeader: "flex flex-col sm:flex-row sm:items-start justify-between gap-4",
  patientInfoContainer: "flex items-start gap-4 min-w-0",
  patientAvatar: "rounded-full w-12 h-12 flex items-center justify-center bg-emerald-100/70",
  patientAvatarIcon: "h-6 w-6 text-emerald-700",
  patientInfo: "min-w-0",
  patientName: "text-lg md:text-sm lg:text-xs xl:text-md whitespace-nowrap font-bold leading-tight text-emerald-900 w-full line-clamp-2",
  patientDetails: "text-sm text-gray-500 mt-1",
  
  statusContainer: "flex flex-col items-start sm:items-end gap-2 mt-2 sm:mt-0",
  
  detailsContainer: "mt-4 flex flex-col gap-3 text-gray-700",
  detailItem: "flex items-center gap-3 text-base",
  detailIcon: "w-4 h-4 text-emerald-500",
  detailText: "font-medium truncate",
  feesText: "font-semibold",
  serviceText: "mt-2 text-base text-gray-600",
  serviceName: "font-semibold text-emerald-800",
  
  actionsContainer: "mt-4 flex items-center justify-between",
  actionsInnerContainer: "flex items-center gap-2 w-full",
  cancelButton: (isLocked) => 
    `px-3 py-1 rounded-full text-sm border ${
      isLocked
        ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
        : "bg-white text-rose-600 border-rose-200 hover:shadow-sm"
    }`,
  
  legendContainer: "mt-6 p-4 rounded-lg bg-white/80 shadow-inner border border-emerald-100 text-sm flex flex-col sm:flex-row flex-wrap items-center gap-4",
  legendItem: "flex items-center gap-2",
  legendDot: "w-3 h-3 rounded-full",
  
  // StatusBadge component styles
  statusBadge: (status) => {
    const map = {
      Pending: "bg-yellow-100 text-yellow-800",
      Confirmed: "bg-emerald-100 text-emerald-800",
      Canceled: "bg-red-100 text-red-800",
      Completed: "bg-sky-100 text-sky-800",
      Rescheduled: "bg-indigo-100 text-indigo-800",
    };
    const classes = map[status] || "bg-gray-100 text-gray-800";
    return `inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${classes}`;
  },
  
  // StatusSelect component styles
  statusSelect: (terminal) => 
    `text-sm cursor-pointer px-3 py-1 rounded-full border focus:outline-none transition ${
      terminal
        ? "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200"
        : "bg-white text-emerald-800 border-emerald-400"
    }`,
  
  // RescheduleButton component styles
  rescheduleButton: (terminal) => 
    `text-sm px-3 py-1 rounded-full cursor-pointer border transition ${
      terminal
        ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
        : "bg-white text-emerald-800 border-emerald-400 hover:shadow-sm"
    }`,
  rescheduleEditContainer: "flex flex-col sm:flex-row xl:flex-col md:flex-col md:items-end gap-2 bg-gray-50 p-2 rounded-md shadow-sm",
  rescheduleDateInput: "text-sm px-3 py-1 w-full sm:w-auto text-green-800 border border-emerald-500 rounded-full",
  rescheduleTimeInput: "text-sm px-3 py-1 w-full sm:w-auto text-green-800 border border-emerald-500 rounded-full",
  rescheduleActions: "flex gap-2 w-full sm:w-auto",
  rescheduleSaveButton: "flex-1 sm:flex-none px-3 py-1 bg-green-500 cursor-pointer text-white border-emerald-500 rounded-full text-sm",
  rescheduleCancelButton: "flex-1 sm:flex-none px-3 py-1 bg-red-200 border text-sm cursor-pointer border-red-500 rounded-full",
  
  // Toast component styles
  toastContainer: "fixed top-4 right-3 sm:right-4 z-50 flex flex-col gap-3",
  toast: "max-w-xs w-full rounded-lg shadow-lg px-4 py-3 border-l-4 border-emerald-400 bg-white/95 backdrop-blur-sm",
  toastContent: "flex items-start gap-3",
  toastSpinner: "h-5 w-5 animate-spin text-emerald-600",
  toastText: "flex-1",
  toastTitle: "font-semibold text-sm",
  toastMessage: "text-xs text-gray-600",
  toastCloseButton: "text-gray-400 hover:text-gray-700",
  
  // Animation styles
  animatedBorderStyle: `
    .animated-border { position: relative; }
    .animated-border::before {
      content: '';
      position: absolute;
      inset: -1px;
      z-index: 0;
      border-radius: 1rem;
      padding: 1px;
      background: linear-gradient(90deg, rgba(16,185,129,0.12), rgba(236,253,245,0.10), rgba(16,185,129,0.12));
      background-size: 200% 100%;
      filter: blur(8px);
      opacity: 0.95;
      transition: opacity .3s ease;
      animation: shift 6s linear infinite;
    }
    .animated-border .card-inner { position: relative; z-index: 1; }
    @keyframes shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
  `,
};

// assets/dummyStyles.js

// ... existing styles above ...

export const serviceDashboardStyles = {
  // Container styles
  container: "min-h-screen font-serif p-4 sm:p-6 bg-linear-to-b from-emerald-50 via-emerald-25 to-white",
  innerContainer: "max-w-7xl mx-auto",
  
  // Header styles
  header: {
    container: "flex flex-col sm:flex-row items-start sm:items-center md:items-center justify-between mb-6 gap-3 md:gap-6 lg:gap-3",
    title: "text-2xl md:text-3xl font-semibold text-emerald-800",
    subtitle: "text-sm text-gray-600"
  },
  
  // Refresh button styles
  refresh: {
    container: "mt-3 sm:mt-0 flex items-center gap-3",
    countText: "text-xs text-slate-600",
    button: (hasServicesProp) => 
      `px-3 py-1 rounded-full text-sm ${
        hasServicesProp
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-white text-emerald-600 border border-emerald-200 hover:shadow-sm"
      }`
  },
  
  // Stat cards grid
  statGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6",
  
  // Search bar styles
  search: {
    container: "mb-6 flex justify-start",
    inputContainer: "flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-200 w-full sm:w-64",
    input: "w-full text-sm outline-none"
  },
  
  // Table styles
  table: {
    container: "bg-white rounded-2xl shadow-sm overflow-hidden border-b border-transparent",
    headerMd: "hidden md:grid lg:hidden grid-cols-5 items-center gap-6 px-4 py-3 text-sm text-gray-600 bg-emerald-50",
    headerLg: "hidden lg:grid md:text-xs lg:text-xs xl:text-md grid-cols-12 items-center gap-4 px-4 py-3 text-sm text-gray-600 bg-emerald-50",
    headerText: "text-center text-xs font-medium",
    headerTextLg: (span) => `col-span-${span} text-center text-xs font-medium`,
    body: "divide-y divide-transparent min-w-full",
    row: "px-4 py-4 font-serif hover:shadow-md transition bg-white md:bg-transparent",
    
    // Tablet view
    tabletView: "hidden md:grid lg:hidden grid-cols-5 items-center gap-6",
    tabletImage: "w-10 h-10 rounded-lg overflow-hidden bg-gray-200 ring-1 ring-emerald-100",
    tabletTextContainer: "min-w-0",
    tabletServiceName: "text-sm font-medium text-emerald-800 whitespace-nowrap",
    tabletPrice: "text-xs text-gray-500",
    tabletCell: "text-center text-sm",
    
    // Desktop view
    desktopView: "hidden lg:grid grid-cols-12 items-center gap-4",
    desktopImage: "w-16 h-16 rounded-xl overflow-hidden ring-1 ring-emerald-100 bg-gray-200",
    desktopServiceName: "font-semibold md:text-xs lg:text-lg xl:text-lg text-emerald-800",
    desktopCell: (span) => `col-span-${span}`,
    desktopCenterCell: (span) => `col-span-${span} text-center`,
    
    // Mobile view
    mobileView: "md:hidden flex flex-col gap-3",
    mobileImage: "w-14 h-14 rounded-lg overflow-hidden bg-gray-200 ring-1 ring-emerald-100",
    mobileServiceHeader: "flex items-center justify-between gap-3",
    mobileServiceName: "font-semibold text-xs text-emerald-800",
    mobileStatsContainer: "mt-2 flex flex-wrap gap-2 text-xs text-gray-600",
    mobileStatItem: (color = "emerald") => 
      `flex items-center gap-2 bg-${color}-50 px-2 py-1 rounded-full ring-1 ring-${color}-100`
  },
  
  // Loading/Error states
  states: {
    loading: "px-4 py-6 text-center text-gray-500",
    error: "px-4 py-6 text-center text-rose-600",
    empty: "px-4 py-6 text-center text-gray-500"
  },
  
  // Show more button
  showMore: {
    container: "px-6 py-4 border-t border-green-50 flex justify-center",
    button: "px-4 py-2 rounded-full cursor-pointer bg-white border border-green-200 shadow-sm hover:bg-green-50 transition"
  },
  
  // StatCard component styles
  statCard: {
    container: "rounded-full bg-linear-to-br from-emerald-100 to-emerald-50 shadow-sm border border-green-100 p-4 gap-4 flex items-center",
    iconContainer: "w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700",
    label: "text-sm text-gray-500",
    value: "text-lg font-semibold text-slate-800"
  }
};