using System;
using System.Diagnostics;
using System.IO;

namespace ArgoLauncher
{
    class Program
    {
        [STAThread]
        static void Main()
        {
            try
            {
                string baseDir = AppDomain.CurrentDomain.BaseDirectory;
                string htmlPath = Path.Combine(baseDir, "index.html");

                if (!File.Exists(htmlPath))
                {
                    // Fallback path check
                    htmlPath = @"C:\Users\odhch\OneDrive\바탕 화면\은퇴계획\antigravity\Values\index.html";
                }

                string edgePath = @"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe";
                if (!File.Exists(edgePath))
                {
                    edgePath = @"C:\Program Files\Microsoft\Edge\Application\msedge.exe";
                }

                string localAppData = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
                string dataDir = Path.Combine(localAppData, "ARGO_Family_App");

                string fileUri = "file:///" + htmlPath.Replace('\\', '/');
                string arguments = string.Format("--app=\"{0}\" --window-size=1280,900 --user-data-dir=\"{1}\"", fileUri, dataDir);

                if (File.Exists(edgePath))
                {
                    ProcessStartInfo psi = new ProcessStartInfo(edgePath, arguments)
                    {
                        UseShellExecute = true,
                        WindowStyle = ProcessWindowStyle.Normal
                    };
                    Process.Start(psi);
                }
                else
                {
                    // Edge not found fallback
                    Process.Start(new ProcessStartInfo("cmd.exe", "/c start \"\" \"" + htmlPath + "\"")
                    {
                        CreateNoWindow = true,
                        UseShellExecute = false
                    });
                }
            }
            catch (Exception ex)
            {
                // Silently fallback or log
                System.Windows.Forms.MessageBox.Show("ARGO 실행 중 오류가 발생했습니다: " + ex.Message, "ARGO 오류", System.Windows.Forms.MessageBoxButtons.OK, System.Windows.Forms.MessageBoxIcon.Error);
            }
        }
    }
}
