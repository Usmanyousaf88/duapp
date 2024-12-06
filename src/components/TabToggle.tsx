interface TabToggleProps {
  activeTab: "main" | "other";
  onTabChange: (tab: "main" | "other") => void;
}

export const TabToggle = ({ activeTab, onTabChange }: TabToggleProps) => {
  return (
    <div className="flex p-0.5 bg-[#94DBBE] backdrop-blur-sm rounded-full gap-1 mb-4 max-w-[200px] mx-auto">
      <button
        onClick={() => onTabChange("main")}
        className={`flex-1 py-1.5 px-4 rounded-full text-sm font-medium transition-colors ${
          activeTab === "main"
            ? "bg-white text-black shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Main Menu
      </button>
      <button
        onClick={() => onTabChange("other")}
        className={`flex-1 py-1.5 px-4 rounded-full text-sm font-medium transition-colors ${
          activeTab === "other"
            ? "bg-white text-black shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Other
      </button>
    </div>
  );
};