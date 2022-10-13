interface IconFacebookProps extends React.SVGProps<SVGSVGElement> {}

const IconFacebook = ({ ...props }: IconFacebookProps) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" width="25" height="25" rx="5" fill="white" />
      <g clipPath="url(#clip0)">
        <path
          d="M12.58 15.2847C12.5067 15.2847 12.4333 15.2847 12.36 15.2847C11.5778 15.2847 10.82 15.2847 10.0378 15.2847C9.64667 15.2847 9.5 15.1407 9.5 14.7565C9.5 13.7481 9.5 12.7397 9.5 11.7313C9.5 11.3472 9.64667 11.2031 10.0378 11.2031C10.82 11.2031 11.5778 11.2031 12.36 11.2031C12.4089 11.2031 12.4822 11.2031 12.5556 11.2031C12.5556 11.1311 12.5556 11.0831 12.5556 11.011C12.5556 10.3388 12.5556 9.66649 12.5556 8.99422C12.5556 8.00982 12.7267 7.04944 13.24 6.18509C13.7778 5.29674 14.5356 4.67249 15.5133 4.33635C16.1489 4.12027 16.7844 4.02423 17.4689 4.02423C18.3 4.02423 19.1311 4.02423 19.9622 4.02423C20.3533 4.00022 20.5 4.16829 20.5 4.50442C20.5 5.46481 20.5 6.40118 20.5 7.36156C20.5 7.72171 20.3533 7.86577 19.9867 7.86577C19.3022 7.86577 18.6178 7.86577 17.9333 7.88978C17.5667 7.91379 17.2 8.00982 17.0289 8.36997C16.9556 8.53804 16.8822 8.73011 16.8822 8.92219C16.8578 9.66649 16.8822 10.4108 16.8822 11.1791C16.9556 11.1791 17.0044 11.1791 17.0778 11.1791C18.0067 11.1791 18.9111 11.1791 19.84 11.1791C20.2556 11.1791 20.4022 11.3231 20.4022 11.7313C20.4022 12.7397 20.4022 13.7481 20.4022 14.7565C20.4022 15.1647 20.28 15.2847 19.84 15.2847C18.9111 15.2847 18.0067 15.2847 17.0778 15.2847C17.0289 15.2847 16.9556 15.2847 16.8822 15.2847C16.8822 15.3568 16.8822 15.4288 16.8822 15.5008C16.8822 18.1419 16.8822 20.7829 16.8822 23.424C16.8822 23.8562 16.7356 24.0002 16.32 24.0002C15.2689 24.0002 14.1933 24.0002 13.1422 24.0002C12.7511 24.0002 12.6044 23.8562 12.6044 23.472C12.6044 20.831 12.6044 18.1659 12.6044 15.5248C12.58 15.4528 12.58 15.3808 12.58 15.2847Z"
          fill="#385CA8"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="11" height="20" fill="white" transform="translate(9.5 4)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconFacebook;
