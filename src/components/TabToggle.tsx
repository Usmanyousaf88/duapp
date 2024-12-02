interface TabToggleProps {
  activeTab: "main" | "other";
  onTabChange: (tab: "main" | "other") => void;
}

export const TabToggle = ({ activeTab, onTabChange }: TabToggleProps) => {
  return (
    <div className="flex p-1 bg-gray-100/80 backdrop-blur-sm rounded-full gap-1 mb-4">
      <button
        onClick={() => onTabChange("main")}
        className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
          activeTab === "main"
            ? "bg-white text-primary shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Huvudmeny
      </button>
      <button
        onClick={() => onTabChange("other")}
        className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
          activeTab === "other"
            ? "bg-white text-primary shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Övrigt
      </button>
    </div>
  );
};