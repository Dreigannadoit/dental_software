import { useCallback } from "react";

const useExportCsv = () => {
  const exportCsv = useCallback((data, fileName = "data.csv") => {
    if (!data || !data.length) {
      console.warn("No data available to export.");
      return;
    }

    try {
      // Extract headers from the first object
      const headers = Object.keys(data[0]);
      const csvContent = [
        headers.join(","), // Add headers as the first row
        ...data.map((row) =>
          headers.map((header) => `"${row[header] || ""}"`).join(",")
        ),
      ].join("\n");

      // Create a Blob and trigger the download
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error exporting CSV:", error);
    }
  }, []);

  return exportCsv;
};

export default useExportCsv;
