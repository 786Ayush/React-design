import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBellFill, BsPersonVideo3 } from "react-icons/bs";
import { BiSearch, BiSolidMessageSquareCheck } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row bg-[#15132B] items-center justify-evenly">
        <div className="flex flex-row items-center p-5">
          <div className="content  text-[#fff]">weframetech</div>
          <div className="icon text-[#7879F1] p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
            >
              <rect
                x="10"
                y="14"
                width="26"
                height="3"
                rx="1.5"
                fill="#7879F1"
              />
              <rect
                x="10"
                y="22"
                width="26"
                height="3"
                rx="1.5"
                fill="#7879F1"
              />
              <rect
                x="10"
                y="30"
                width="26"
                height="3"
                rx="1.5"
                fill="#7879F1"
              />
            </svg>
          </div>
        </div>
        <div className="input flex flex-row items-center w-[450px] h-[45px]  bg-[#211A75] rounded-[46px] text-[16px]">
          <div className="icon p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <g clip-path="url(#clip0_4136_5)">
                <path
                  d="M15.7544 24.4961C8.99144 24.4961 3.50889 19.0136 3.50889 12.2505C3.50889 5.48744 8.99138 0.00500488 15.7544 0.00500488C22.5175 0.00500488 28 5.4875 28 12.2506C28 19.0136 22.5175 24.4961 15.7544 24.4961ZM15.7544 3.50375C10.9237 3.50375 7.00763 7.41981 7.00763 12.2506C7.00763 17.0813 10.9237 20.9974 15.7544 20.9974C20.5852 20.9974 24.5013 17.0813 24.5013 12.2506C24.5013 7.41981 20.5851 3.50375 15.7544 3.50375Z"
                  fill="#7879F1"
                />
                <path
                  d="M1.75951 27.9948C1.29451 27.9975 0.847592 27.815 0.51747 27.4875C-0.168521 26.8071 -0.173043 25.6995 0.50734 25.0135C0.510717 25.0102 0.514093 25.0068 0.51747 25.0034L7.09507 18.4258C7.80518 17.7398 8.93694 17.7594 9.62293 18.4695C10.3089 19.1797 10.2893 20.3114 9.57922 20.9974L3.00156 27.4875C2.67143 27.815 2.22452 27.9975 1.75951 27.9948Z"
                  fill="#7879F1"
                />
              </g>
              <defs>
                <clipPath id="clip0_4136_5">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <input type="text" placeholder="Search here" className="bg-[#211A75]"/>
        </div>
        <div className="content text-[#6418C3] p-3">other menu</div>
        <div className="icon p-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="bell 1">
              <path
                id="Vector"
                d="M25.4707 19.1862L23.3333 15.9802V11.6667C23.3333 9.19135 22.35 6.81738 20.5997 5.06704C18.8493 3.3167 16.4753 2.33337 14 2.33337C11.5246 2.33337 9.15066 3.3167 7.40033 5.06704C5.64999 6.81738 4.66666 9.19135 4.66666 11.6667V15.9802L2.52932 19.1862C2.41256 19.362 2.34562 19.5661 2.33561 19.7769C2.32559 19.9877 2.37288 20.1972 2.47245 20.3833C2.57201 20.5693 2.72013 20.7249 2.90106 20.8335C3.08199 20.9421 3.28897 20.9997 3.49999 21H24.5C24.711 20.9997 24.918 20.9421 25.0989 20.8335C25.2798 20.7249 25.428 20.5693 25.5275 20.3833C25.6271 20.1972 25.6744 19.9877 25.6644 19.7769C25.6544 19.5661 25.5874 19.362 25.4707 19.1862Z"
                fill="#7879F1"
              />
              <path
                id="Vector_2"
                d="M14 25.6666C15.0344 25.6675 16.0397 25.324 16.8572 24.6903C17.6748 24.0565 18.258 23.1686 18.515 22.1666H9.485C9.74197 23.1686 10.3252 24.0565 11.1428 24.6903C11.9603 25.324 12.9656 25.6675 14 25.6666Z"
                fill="#7879F1"
              />
            </g>
          </svg>
        </div>
        <div className="ic p-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Video Lesson 2 2" clip-path="url(#clip0_4107_45)">
              <g id="layer2">
                <g id="g24043">
                  <path
                    id="rect20770"
                    d="M2.54521 0C1.14605 0 -0.000244141 1.14629 -0.000244141 2.54545V19.0909C-0.000244141 20.4901 1.14605 21.6364 2.54521 21.6364H4.01556C3.92977 21.1123 3.83734 20.538 3.82415 20.0368C3.82415 17.7169 5.15497 15.6365 7.17873 14.6314C6.67431 14.0256 6.36961 13.248 6.36961 12.4029C6.36961 10.4805 7.94387 8.90909 9.86712 8.90909C11.7904 8.90909 13.3634 10.4805 13.3634 12.4029C13.3634 13.2483 13.0587 14.0255 12.5543 14.6314C14.5787 15.6362 15.9088 17.7165 15.9088 20.0368C15.8779 20.638 15.8276 21.0623 15.6876 21.6364H25.4543C26.8535 21.6364 27.9998 20.4901 27.9998 19.0909V2.54545C27.9998 1.14629 26.8535 0 25.4543 0H2.54521ZM2.54521 1.27273H25.4543C26.1704 1.27273 26.727 1.82936 26.727 2.54545V5.09091H1.27248V2.54545C1.27248 1.82936 1.82912 1.27273 2.54521 1.27273ZM18.7638 8.98864L24.4911 12.1705C24.9287 12.4127 24.9287 13.0419 24.4911 13.2841L18.7638 16.4659C18.3393 16.7021 17.8174 16.3948 17.8179 15.9091V9.54545C17.8021 9.01539 18.3461 8.758 18.7638 8.98864ZM9.86712 10.1818C8.63102 10.1818 7.64233 11.169 7.64233 12.4029C7.64233 13.6367 8.63102 14.6239 9.86712 14.6239C11.1032 14.6239 12.0907 13.6367 12.0907 12.4029C12.0907 11.169 11.1032 10.1818 9.86712 10.1818ZM8.3222 15.53C6.39994 16.1859 5.09688 17.9883 5.09688 20.0368C5.11112 20.55 5.22314 21.1035 5.3032 21.6364H14.3962C14.544 21.0322 14.6071 20.5652 14.6361 20.0368C14.6361 17.9889 13.3339 16.1875 11.412 15.5312C10.9451 15.7633 10.4216 15.8967 9.86712 15.8967C9.31242 15.8967 8.78944 15.7622 8.3222 15.53Z"
                    fill="#464366"
                  />
                  <path
                    id="path27725"
                    d="M6.36339 22.9091C5.18491 22.9091 4.18775 23.7249 3.90245 24.8182H-0.000244141V26.0909H3.90245C4.18775 27.1842 5.18491 28 6.36339 28C7.54223 28 8.54187 27.1847 8.82682 26.0909H27.9998V24.8182H8.82682C8.54187 23.7244 7.54223 22.9091 6.36339 22.9091Z"
                    fill="#464366"
                  />
                  <g id="Group">
                    <path
                      id="path22037"
                      d="M24.1816 2.54547V3.8182H25.4543V2.54547H24.1816Z"
                      fill="#464366"
                    />
                    <path
                      id="path22039"
                      d="M21.6361 2.54547V3.8182H22.9089V2.54547H21.6361Z"
                      fill="#464366"
                    />
                    <path
                      id="path22041"
                      d="M19.0907 2.54547V3.8182H20.3634V2.54547H19.0907Z"
                      fill="#464366"
                    />
                    <path
                      id="path22463"
                      d="M16.5452 2.54547V3.8182H17.8179V2.54547H16.5452Z"
                      fill="#464366"
                    />
                  </g>
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_4107_45">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(-0.000244141)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="icon p-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="checkbox (1) 1">
              <path
                id="Vector"
                d="M23.3334 9.33329V16.3333C23.3313 18.1892 22.5932 19.9685 21.2808 21.2808C19.9685 22.5931 18.1892 23.3313 16.3334 23.3333H9.33335C9.02393 23.3333 8.72719 23.4562 8.5084 23.675C8.2896 23.8938 8.16669 24.1905 8.16669 24.5C8.16669 24.8094 8.2896 25.1061 8.5084 25.3249C8.72719 25.5437 9.02393 25.6666 9.33335 25.6666H16.3334C18.8078 25.6638 21.1802 24.6795 22.9299 22.9298C24.6796 21.1801 25.6638 18.8078 25.6667 16.3333V9.33329C25.6667 9.02387 25.5438 8.72713 25.325 8.50833C25.1062 8.28954 24.8094 8.16663 24.5 8.16663C24.1906 8.16663 23.8939 8.28954 23.6751 8.50833C23.4563 8.72713 23.3334 9.02387 23.3334 9.33329Z"
                fill="#7879F1"
              />
              <path
                id="Vector_2"
                d="M16.3333 22.1667C17.8799 22.1649 19.3626 21.5497 20.4561 20.4562C21.5497 19.3626 22.1649 17.8799 22.1667 16.3334V8.16671C22.1649 6.62017 21.5497 5.1375 20.4561 4.04393C19.3626 2.95036 17.8799 2.3352 16.3333 2.33337H8.16668C6.62014 2.3352 5.13747 2.95036 4.0439 4.04393C2.95033 5.1375 2.33517 6.62017 2.33334 8.16671V16.3334C2.33517 17.8799 2.95033 19.3626 4.0439 20.4562C5.13747 21.5497 6.62014 22.1649 8.16668 22.1667H16.3333ZM9.11168 10.9832L10.603 13.0454L15.5408 8.47669C15.7681 8.26653 16.0695 8.15525 16.3788 8.16733C16.6881 8.17941 16.9799 8.31385 17.19 8.54109C17.4002 8.76833 17.5115 9.06974 17.4994 9.37903C17.4873 9.68831 17.3529 9.98013 17.1256 10.1903L11.2218 15.652C11.1007 15.7641 10.9571 15.8491 10.8006 15.9016C10.6442 15.954 10.4783 15.9727 10.3141 15.9563C10.1499 15.94 9.99103 15.889 9.84799 15.8067C9.70495 15.7244 9.58099 15.6127 9.48431 15.4789L7.22168 12.3503C7.04949 12.0993 6.98221 11.7909 7.0342 11.491C7.08619 11.1911 7.25333 10.9234 7.49996 10.745C7.74658 10.5666 8.05317 10.4916 8.35428 10.5361C8.65539 10.5806 8.92719 10.7411 9.11168 10.9832Z"
                fill="#7879F1"
              />
            </g>
          </svg>
        </div>
        <div className="icon p-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="office 1">
              <path
                id="Vector"
                d="M13.3466 6.00833L12.775 4.29333C12.6947 4.06289 12.5451 3.86294 12.3466 3.7209C12.1482 3.57886 11.9107 3.5017 11.6666 3.5H5.83331C4.90589 3.50271 4.01722 3.87233 3.36143 4.52812C2.70564 5.18391 2.33602 6.07258 2.33331 7V9.33333H10.0216L13.3466 6.00833Z"
                fill="#7879F1"
              />
              <path
                id="Vector_2"
                d="M22.1666 7H15.6566L11.3283 11.3283C11.1059 11.5433 10.8093 11.6644 10.5 11.6667H2.33331V21C2.33602 21.9274 2.70564 22.8161 3.36143 23.4719C4.01722 24.1277 4.90589 24.4973 5.83331 24.5H22.1666C23.0941 24.4973 23.9827 24.1277 24.6385 23.4719C25.2943 22.8161 25.6639 21.9274 25.6666 21V10.5C25.6639 9.57258 25.2943 8.68391 24.6385 8.02812C23.9827 7.37233 23.0941 7.00271 22.1666 7Z"
                fill="#7879F1"
              />
            </g>
          </svg>
        </div>
        <div className="language flex flex-row items-center p-4 bg-[#211A75] rounded-[46px]">
          <div className="icon p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <g clip-path="url(#clip0_4107_13)">
                <path
                  d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                  fill="#F0F0F0"
                />
                <path
                  d="M13.3913 14H28C28 12.7364 27.8316 11.5122 27.5177 10.3478H13.3913V14Z"
                  fill="#D80027"
                />
                <path
                  d="M13.3913 6.69571H25.9452C25.0882 5.29724 23.9924 4.06114 22.7148 3.04352H13.3913V6.69571Z"
                  fill="#D80027"
                />
                <path
                  d="M14 28.0001C17.2949 28.0001 20.3233 26.8613 22.7148 24.9567H5.28522C7.6767 26.8613 10.7051 28.0001 14 28.0001Z"
                  fill="#D80027"
                />
                <path
                  d="M2.05484 21.3044H25.9452C26.6332 20.1817 27.1668 18.9545 27.5177 17.6522H0.4823C0.83323 18.9545 1.36682 20.1817 2.05484 21.3044Z"
                  fill="#D80027"
                />
                <path
                  d="M6.48506 2.1863H7.76087L6.57415 3.04845L7.02745 4.44347L5.84079 3.58132L4.65412 4.44347L5.04569 3.23832C4.00083 4.10867 3.08503 5.12838 2.33034 6.26456H2.73913L1.98373 6.81335C1.86605 7.00968 1.75317 7.20912 1.645 7.41152L2.00572 8.52173L1.33273 8.03277C1.16545 8.3872 1.01243 8.74962 0.874891 9.11958L1.2723 10.3428H2.73913L1.55241 11.205L2.00572 12.6L0.819055 11.7379L0.108227 12.2543C0.0370781 12.8262 0 13.4088 0 14H14C14 6.26806 14 5.35653 14 0C11.2343 0 8.65621 0.802266 6.48506 2.1863ZM7.02745 12.6L5.84079 11.7379L4.65412 12.6L5.10743 11.205L3.92071 10.3428H5.38754L5.84079 8.94781L6.29404 10.3428H7.76087L6.57415 11.205L7.02745 12.6ZM6.57415 7.12671L7.02745 8.52173L5.84079 7.65959L4.65412 8.52173L5.10743 7.12671L3.92071 6.26456H5.38754L5.84079 4.86954L6.29404 6.26456H7.76087L6.57415 7.12671ZM12.0492 12.6L10.8625 11.7379L9.67586 12.6L10.1292 11.205L8.94244 10.3428H10.4093L10.8625 8.94781L11.3158 10.3428H12.7826L11.5959 11.205L12.0492 12.6ZM11.5959 7.12671L12.0492 8.52173L10.8625 7.65959L9.67586 8.52173L10.1292 7.12671L8.94244 6.26456H10.4093L10.8625 4.86954L11.3158 6.26456H12.7826L11.5959 7.12671ZM11.5959 3.04845L12.0492 4.44347L10.8625 3.58132L9.67586 4.44347L10.1292 3.04845L8.94244 2.1863H10.4093L10.8625 0.791273L11.3158 2.1863H12.7826L11.5959 3.04845Z"
                  fill="#0052B4"
                />
              </g>
              <defs>
                <clipPath id="clip0_4107_13">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="content text-white p-1">English</div>
          <div className="icon p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
            >
              <path d="M0 0H15L7.5 8L0 0Z" fill="#6418C3" />
            </svg>
          </div>
        </div>
        <div className="user flex flex-row items-center ">
          <div className="icon p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
            >
              <rect width="57" height="57" rx="14" fill="#C4C4C4" />
            </svg>
          </div>
          <div className="content p-2">
            <div className="text-white">Instructor day</div>
            <div className="text-[#7879F1]">super admin</div>
          </div>
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
            >
              <path d="M0 0H15L7.5 8L0 0Z" fill="#6418C3" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
