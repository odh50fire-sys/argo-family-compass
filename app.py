import os
import sys
import ctypes
import threading
import time
import webview

# 1. 윈도우 작업표시줄에 고유 앱으로 등록 (AUMID 등록)
try:
    myappid = 'ARGO.FamilyValues.Compass.DesktopApp.1.0'
    ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(myappid)
except Exception:
    pass

def get_resource_path(filename):
    if getattr(sys, 'frozen', False):
        if hasattr(sys, '_MEIPASS'):
            meipass_path = os.path.join(sys._MEIPASS, filename)
            if os.path.exists(meipass_path):
                return meipass_path
        exe_dir = os.path.dirname(sys.executable)
        exe_path = os.path.join(exe_dir, filename)
        if os.path.exists(exe_path):
            return exe_path
    base_dir = os.path.dirname(os.path.abspath(__file__))
    local_path = os.path.join(base_dir, filename)
    if os.path.exists(local_path):
        return local_path
    return os.path.join(r"C:\Users\odhch\OneDrive\바탕 화면\은퇴계획\antigravity\Values", filename)

def inject_window_icon(window_title, ico_path):
    """윈도우 창 생성 후 네이티브 HWND에 아이콘을 주입하여 타이틀바와 작업표시줄에 완벽 반영"""
    user32 = ctypes.windll.user32
    IMAGE_ICON = 1
    LR_LOADFROMFILE = 0x00000010
    WM_SETICON = 0x0080
    
    for _ in range(30):
        time.sleep(0.15)
        try:
            hwnd = user32.FindWindowW(None, window_title)
            if hwnd and os.path.exists(ico_path):
                hicon_big = user32.LoadImageW(None, ico_path, IMAGE_ICON, 32, 32, LR_LOADFROMFILE)
                hicon_small = user32.LoadImageW(None, ico_path, IMAGE_ICON, 16, 16, LR_LOADFROMFILE)
                if hicon_big:
                    user32.SendMessageW(hwnd, WM_SETICON, 1, hicon_big)  # ICON_BIG (32x32)
                if hicon_small:
                    user32.SendMessageW(hwnd, WM_SETICON, 0, hicon_small)  # ICON_SMALL (16x16)
                break
        except Exception:
            pass

def main():
    window_title = 'ARGO - 우리 가족 가치관 나침반'
    html_path = get_resource_path('index.html')
    ico_path = get_resource_path('argo_icon.ico')
    
    file_url = 'file:///' + html_path.replace('\\', '/')
    
    # 별도 스레드에서 창 생성 감지 후 HWND 아이콘 주입
    t = threading.Thread(target=inject_window_icon, args=(window_title, ico_path), daemon=True)
    t.start()
    
    webview.create_window(
        title=window_title,
        url=file_url,
        width=1280,
        height=880,
        resizable=True,
        min_size=(900, 650),
        confirm_close=False,
        easy_drag=True
    )
    
    webview.start(gui='edgechromium', debug=False)

if __name__ == '__main__':
    main()
