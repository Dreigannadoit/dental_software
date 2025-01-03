import React, { useState } from 'react'
import { logo } from '../assets/icons/INDEX.JS'
import { userAvatar } from '../assets/icons/INDEX.JS'
import { navIcon } from '../assets/icons/INDEX.JS'
import UserProfileDropdown from './UserProfileDropdown'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    const [showdropdown, setShowDropdown] = useState(false);
  
    // Map route paths to readable page names
    const pageNames = {
      '/profile': 'User Profile',
      '/dashboard': 'Dashboard',
      '/calendar': 'Calendar',
      '/patients': 'Patients',
      '/chart': 'Chart',
      '/eligibility': 'Eligibility',
      '/distribution': 'Distribution',
      '/reports': 'Reports',
      '/reports/case_management': 'Case Management',
      '/reports/activity': 'Activity',
      '/reports/statistics_reports': 'Statistics Reports',
      '/reports/state_reports_grade': 'State Reports Grade',
      '/reports/end_of_year': 'End Of Year Report',
      '/schools': 'Schools',
      '/grade': 'Grade',
      '/program': 'Program',
      '/dental_codes': 'Dental Codes',
      '/procedure_codes': 'Procedure Codes',
      '/users': 'Users',
      '/import': 'Import',
    };
  
    const current_page = pageNames[location.pathname] || 'Page Not Found';
  
    const toggleDropdown = () => {
      setShowDropdown((prev) => !prev);
    };
  
    return (
      <>
        <div className={`header glassmorphism shadow ${showdropdown ? 'show_dropdown' : ''}`}>
          <div className="logo">
            <Logo_svg />
          </div>
  
          <div className="side_nav_controller f-center">
            <button>
              <img src={navIcon} alt="Navigation Icon" />
            </button>
          </div>
  
          <div className="current_page f-center">
            <h2>{current_page}</h2>
          </div>
  
          <div
            className="user_avatar f-center"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <img src={userAvatar} alt="User Avatar" />
          </div>
        </div>
  
        <UserProfileDropdown toggleDropdown={toggleDropdown} />
      </>
    );
  };

const Logo_svg = () => {
    return (
        <svg width="162" height="51" viewBox="0 0 162 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8696 44.0364C9.77716 44.0364 10.8849 41.4655 13.2164 36.5337C15.1394 32.466 16.8633 26.8717 20.1685 20.2629C23.0766 14.4577 26.2258 9.5965 29.6162 5.67946C31.7582 3.20871 33.3399 1.97333 34.3613 1.97333C35.1131 1.97333 35.7798 2.46547 36.3615 3.44976C36.9998 4.4943 37.319 5.56898 37.319 6.67379C37.319 7.75851 37.1488 8.74279 36.8083 9.62664C36.482 10.4904 36.0352 11.3642 35.4678 12.248C34.9145 13.1319 34.2549 14.0057 33.4889 14.8694C32.737 15.7332 31.9355 16.5467 31.0844 17.3101C29.3254 18.9171 27.6018 20.1223 25.9137 20.9258C23.3488 22.4375 21.7095 24.9533 21.1137 27.2835C23.9792 23.6276 27.32 21.0765 31.1359 19.6302C32.3559 19.1682 33.3843 18.9372 34.2213 18.9372C35.0582 18.9372 35.5618 19.1481 35.732 19.5699C35.9023 19.9717 35.9306 20.514 35.8172 21.197C35.7179 21.88 35.5193 22.6533 35.2214 23.5171C34.9235 24.3808 32.6243 31.019 32.3122 31.9431C31.532 34.3335 31.1419 36.0409 31.1419 37.0654C31.1419 39.1745 32.6142 40.2291 33.5646 40.2291C34.6144 40.2291 36.8097 34.2851 38.0727 32.466C39.3024 29.9769 40.2289 29.714 41.0942 27.8861C41.7326 27.8258 42.0518 28.1974 42.0518 29.0009C42.0518 29.6437 41.7539 30.6883 41.1581 32.1346C40.5764 33.5608 40.0019 34.7962 39.4345 35.8407C38.8671 36.8853 38.1614 39.0346 37.5194 41.0983C36.6054 44.0364 36.3111 45.0557 35.2426 47.3702C33.4269 49.158 31.682 50.0519 30.0081 50.0519C28.3342 50.0519 27.1426 49.4492 26.4334 48.244C25.7383 47.0187 25.3907 45.2711 25.3907 43.0012C25.3907 40.0885 25.9137 37.0158 27.1202 32.0636C27.47 30.628 30.2138 24.3005 30.1145 24.3005C28.9797 24.3005 27.2561 25.3049 24.9439 27.3136C22.4898 29.4429 20.7591 31.532 19.7519 33.5809C19.1703 36.8149 16.8285 39.8984 16.7151 42.8311C16.7151 43.6346 14.1038 44.0364 12.8696 44.0364ZM27.1053 17.4306C28.9353 16.2454 30.5099 14.8293 31.8291 13.1821C33.1484 11.4948 33.808 10.0384 33.808 8.8131C33.808 8.21047 33.7229 7.65807 33.5527 7.15588C33.3967 6.63361 33.1839 6.37248 32.9143 6.37248C32.659 6.37248 32.3256 6.64366 31.9143 7.18602C31.5029 7.72838 31.0418 8.48165 30.5312 9.44585C29.453 11.4546 28.3111 14.1162 27.1053 17.4306Z" fill="#F8A3A2" />
            <path d="M46.4564 32.1948C47.2792 34.2839 49.1446 35.3285 52.0526 35.3285C53.8684 35.3285 55.5778 34.7058 57.1807 33.4603C58.7979 32.1948 60.181 30.3368 61.33 27.8861C61.9684 27.8258 62.2876 28.1974 62.2876 29.0009C62.2876 29.9049 61.9046 31.2106 61.1385 32.918C60.3867 34.6053 59.6774 35.9713 59.0107 37.0158C58.3582 38.0604 57.6205 39.0346 56.7977 39.9385C55.9892 40.8224 55.1167 41.5857 54.1805 42.2285C52.1519 43.6346 50.017 44.3377 47.7757 44.3377C43.2646 44.3377 40.3353 42.57 38.9877 39.0346C38.5053 37.749 38.2642 36.2826 38.2642 34.6355C38.2642 32.9682 38.4628 31.4416 38.86 30.0555C39.2714 28.6695 39.8317 27.3538 40.541 26.1084C41.2503 24.8428 42.0943 23.6778 43.0731 22.6131C44.0519 21.5485 45.1159 20.6345 46.2649 19.8712C48.7048 18.204 51.1944 17.3703 53.7336 17.3703C55.5636 17.3703 56.819 18.1839 57.4999 19.811C57.7411 20.3734 57.8617 21.1267 57.8617 22.0708C57.8617 22.9948 57.6914 23.9088 57.351 24.8127C57.0247 25.7167 56.5779 26.5402 56.0104 27.2835C55.443 28.0066 54.7834 28.6494 54.0315 29.2119C53.2797 29.7542 52.4782 30.2263 51.6271 30.628C50.1234 31.3512 48.3998 31.8734 46.4564 32.1948ZM46.1585 29.3926C47.9743 29.0913 49.5347 28.3782 50.8398 27.2533C52.2158 26.0481 52.9038 24.642 52.9038 23.035C52.9038 21.4079 52.3789 20.5944 51.3292 20.5944C49.9673 20.5944 48.7828 21.5184 47.7757 23.3664C46.811 25.1341 46.272 27.1429 46.1585 29.3926Z" fill="#F8A3A2" />
            <path d="M75.6292 1.43608C77.2038 1.43608 77.9911 3.31425 77.9911 7.0706C77.9911 12.0322 75.8632 17.275 71.6075 22.799C69.9904 24.9082 68.2881 26.7261 66.5007 28.2528C66.6851 31.3462 67.4866 33.1139 68.9052 33.5558C69.3591 33.6965 69.8911 33.7668 70.5011 33.7668C71.1252 33.7668 71.792 33.6563 72.5012 33.4353C73.2247 33.1943 73.9411 32.8126 74.6504 32.2903C76.225 31.1454 77.5371 29.4379 78.5869 27.1681C79.2252 27.1078 79.5444 27.4794 79.5444 28.2829C79.5444 28.6043 79.3884 29.2772 79.0763 30.3017C78.7784 31.3261 78.2181 32.662 77.3953 34.3091C76.5725 35.9362 75.5866 37.4126 74.4376 38.7384C71.7991 41.7917 68.8697 43.3183 65.6496 43.3183C61.9329 43.3183 59.6845 41.0685 58.9043 36.569C58.649 35.1628 58.5213 33.596 58.5213 31.8685C58.5213 30.1209 59.0745 26.5956 59.0745 26.5956L60.564 21.3527C60.564 21.3527 61.9117 17.8977 62.7344 16.2305C63.5714 14.5632 64.4509 12.9964 65.373 11.53C66.3092 10.0636 67.2596 8.71777 68.2243 7.49243C69.1889 6.24701 70.1251 5.17234 71.033 4.2684C72.9765 2.38019 74.5085 1.43608 75.6292 1.43608ZM66.5007 24.6069C68.8839 22.4977 70.8912 19.9667 72.5225 17.0139C74.1822 14.0208 75.0121 11.3793 75.0121 9.08938C75.0121 7.9444 74.8419 7.12082 74.5014 6.61863C74.3879 6.43784 74.1893 6.34745 73.9056 6.34745C73.6219 6.34745 73.2247 6.60859 72.714 7.13086C72.2033 7.63305 71.6785 8.32606 71.1394 9.20991C70.6004 10.0938 70.0684 11.1383 69.5435 12.3435C69.0329 13.5287 68.5647 14.7942 68.1392 16.1401C67.2029 19.1733 66.6568 21.9955 66.5007 24.6069Z" fill="#F8A3A2" />
            <path d="M92.8647 0C94.4394 0 95.2267 1.87817 95.2267 5.63452C95.2267 10.5961 93.0988 15.8389 88.8431 21.363C87.226 23.4721 85.5237 25.2901 83.7363 26.8167C83.9207 29.9102 84.7222 31.6778 86.1408 32.1198C86.5947 32.2604 87.1267 32.3307 87.7366 32.3307C88.3608 32.3307 89.0275 32.2202 89.7368 31.9992C90.4603 31.7582 91.1767 31.3765 91.8859 30.8543C93.4605 29.7093 94.7727 28.0019 95.8225 25.732C96.4608 25.6717 96.78 26.0433 96.78 26.8468C96.78 27.1682 96.6239 27.8411 96.3119 28.8656C96.014 29.8901 95.4536 31.2259 94.6309 32.873C93.8081 34.5001 92.8222 35.9766 91.6732 37.3023C89.0346 40.3556 86.1053 41.8823 82.8851 41.8823C79.1685 41.8823 76.9201 39.6325 76.1399 35.1329C75.8845 33.7268 75.7569 32.1599 75.7569 30.4324C75.7569 28.6848 75.9413 26.9272 76.3101 25.1595C76.6789 23.3918 77.1754 21.6442 77.7996 19.9167C78.4238 18.1691 79.1472 16.4616 79.97 14.7944C80.8069 13.1271 81.6865 11.5603 82.6085 10.0939C83.5448 8.62754 84.4952 7.28169 85.4598 6.05635C86.4245 4.81094 87.3607 3.73626 88.2686 2.83232C90.212 0.944108 91.7441 0 92.8647 0ZM83.7363 23.1708C86.1195 21.0616 88.1267 18.5306 89.7581 15.5778C91.4178 12.5848 92.2477 9.94327 92.2477 7.6533C92.2477 6.50832 92.0774 5.68474 91.737 5.18255C91.6235 5.00176 91.4249 4.91137 91.1412 4.91137C90.8575 4.91137 90.4603 5.17251 89.9496 5.69478C89.4389 6.19697 88.914 6.88998 88.375 7.77383C87.8359 8.65767 87.304 9.70222 86.7791 10.9075C86.2684 12.0926 85.8003 13.3581 85.3747 14.704C84.4385 17.7372 83.8923 20.5595 83.7363 23.1708Z" fill="#F8A3A2" />
            <path d="M99.9505 42.0329L99.5249 42.063C97.2836 42.063 95.5742 41.2796 94.3968 39.7128C93.2903 38.2464 92.7371 36.2578 92.7371 33.7468C92.7371 30.2918 93.7088 26.9874 95.6522 23.8337C97.5389 20.7804 99.8299 18.6411 102.525 17.4158C102.44 16.5119 102.674 15.7686 103.227 15.1861C103.625 14.7642 104.277 14.5533 105.185 14.5533C106.107 14.5533 106.994 14.6739 107.845 14.9149C108.696 15.156 109.554 15.6883 110.419 16.5119C112.292 18.2595 113.228 20.6097 113.228 23.5625C113.228 26.7564 112.668 29.7896 111.547 32.6621C113.987 31.9189 116.122 29.6088 117.952 25.732C118.59 25.6717 118.91 26.0433 118.91 26.8468C118.91 27.1682 118.839 27.5599 118.697 28.0219C116.768 34.5102 112.909 38.8089 107.121 40.9181C105.05 41.6814 102.695 42.063 100.057 42.063L99.9505 42.0329ZM97.5945 33.1437C97.5945 35.4739 100.277 36.6389 101.653 36.6389C102.816 36.6389 103.986 35.6446 105.164 33.6559C106.398 31.5869 107.015 25.1796 107.015 23.0503C107.015 20.8809 106.277 19.4446 104.802 18.7416C102.263 19.7459 101.653 21.7194 99.9292 25.4909C99.1288 26.7457 97.5945 31.9786 97.5945 33.1437Z" fill="#F8A3A2" />
            <path d="M35.4001 7.53955C36.2311 10.0527 34.403 16.515 20.4436 22.2594C6.48408 28.0037 1.66474 26.807 1 25.4905" stroke="#F8A3A2" stroke-width="2" stroke-linecap="round" />
            <path d="M36.3975 6.4624C37.2284 8.97554 32.4089 17.951 22.4378 20.4642C8.47838 26.2085 12.4668 25.4905 4.98851 26.5675" stroke="#F8A3A2" stroke-width="2" stroke-linecap="round" />
            <path d="M145.483 23.1701C145.829 24.2052 147.293 24.2052 147.638 23.1701M143.685 14.1161C145.576 14.4174 151.85 16.647 153.741 16.3488C156.147 15.9693 154.595 13.9333 156.811 15.0708C159.513 16.4585 161.417 19.2574 160.922 24.1565C160.802 25.3416 160.132 27.9963 158.409 29.134C156.685 30.2717 156.015 32.6336 155.895 33.5817V41.8392C155.895 42.5503 154.818 45.4154 151.587 43.9933C151.414 43.9362 151.408 42.9344 151.327 41.8049C151.181 39.7519 150.841 37.3411 149.641 35.6693C148.956 34.7154 147.988 34.2485 147.199 34.0509C146.78 33.9459 146.34 33.945 145.924 34.0618C145.251 34.2508 144.448 34.6607 143.801 35.4009C142.221 37.2085 141.884 40.2258 141.744 42.6225C141.7 43.374 141.664 43.95 141.534 43.9933C138.303 45.4294 137.226 42.5572 137.226 41.8392V33.5817C137.106 32.6243 136.436 30.4224 134.713 29.2735C132.99 28.1246 132.319 25.4439 132.2 24.2472C131.764 19.8853 133.192 17.1721 135.388 15.6307C135.743 15.3817 135.759 16.5386 136.149 16.3488C138.329 15.288 141.35 13.7438 143.685 14.1161ZM140.816 22.4521C140.816 23.047 140.693 23.1701 140.098 23.1701C139.503 23.1701 139.38 23.047 139.38 22.4521C139.38 21.8573 139.503 21.7341 140.098 21.7341C140.693 21.7341 140.816 21.8573 140.816 22.4521ZM153.741 22.4521C153.741 23.047 153.618 23.1701 153.023 23.1701C152.428 23.1701 152.305 23.047 152.305 22.4521C152.305 21.8573 152.428 21.7341 153.023 21.7341C153.618 21.7341 153.741 21.8573 153.741 22.4521Z" stroke="#8BE1FC" stroke-width="1.3" stroke-linecap="round" />
            <path d="M136.624 10.6046C138.661 8.45051 138.661 8.80953 140.129 8.09149C146.821 8.09149 147.14 10.2456 154.15 9.88659C156.387 9.41393 156.947 8.50114 157.337 6.29639C158.278 9.08132 158.604 10.6496 158.293 13.4768C158.028 15.6659 157.181 16.2518 155.425 17.067C151.976 17.6272 149.073 18.144 145.483 16.708C140.703 14.5538 137.581 16.5836 134.712 18.5031L136.305 14.9129C138.618 12.6719 140.054 11.8753 143.316 12.7587C146.709 13.6308 148.415 14.1948 151.92 14.5538C155.106 14.5538 155.808 14.0434 156.7 13.1178C157.175 12.2506 157.336 11.5208 157.337 9.52757C157.222 11.3884 156.695 12.2353 155.106 13.4768C148.733 13.7717 147.14 11.6817 140.448 11.3227C137.519 12.5774 137.233 13.4334 136.305 14.9129L134.712 18.5031C134.773 15.3378 135.031 13.4768 136.624 10.6046Z" fill="#8BE1FC" />
            <path d="M136.624 10.6046C138.661 8.45051 138.661 8.80953 140.129 8.09149C146.821 8.09149 147.14 10.2456 154.15 9.88659C156.387 9.41393 156.947 8.50114 157.337 6.29639C158.278 9.08132 158.604 10.6496 158.293 13.4768C158.028 15.6659 157.181 16.2518 155.425 17.067C151.976 17.6272 149.073 18.144 145.483 16.708C140.703 14.5538 137.581 16.5836 134.712 18.5031L136.305 14.9129C138.618 12.6719 140.054 11.8753 143.316 12.7587C146.709 13.6308 148.415 14.1948 151.92 14.5538C155.106 14.5538 155.808 14.0434 156.7 13.1178C157.175 12.2506 157.336 11.5208 157.337 9.52757C157.222 11.3884 156.695 12.2353 155.106 13.4768C148.733 13.7717 147.14 11.6817 140.448 11.3227C137.519 12.5774 137.233 13.4334 136.305 14.9129L134.712 18.5031C134.773 15.3378 135.031 13.4768 136.624 10.6046Z" fill="#8BE1FC" />
        </svg>
    )
}

export default Header