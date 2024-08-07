import { h } from '@stencil/core';

export class AccordionIcons {
  static expandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );

  static collapseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </svg>
  );
}

export class AlertIcons {
  static successIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path
        fill="#52BD94"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
      />
    </svg>
  );

  static errorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path
        fill="#D14343"
        d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm-32 224a32 32 0 1 1 64 0 32 32 0 1 1-64 0z"
      />
    </svg>
  );

  static infoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path
        fill="#474D66"
        d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm-40-176h24v-64h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
      />
    </svg>
  );

  static warningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path
        fill="#FFB020"
        d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7.2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8.2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0z"
      />
    </svg>
  );
}

export class CheckBoxIcons {
  static checkIcon = (style: Record<string, string>) => (
    <svg class="amalitech-checkbox-icon" style={style} width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47" />
    </svg>
  );
}

export class CalendarIcons {
  static prevArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path
        d="M6.59729 11.6422C5.99329 11.0004 5.99329 9.9994 6.59729 9.35765L12.7264 2.84545C13.0418 2.51031 13.5692 2.49432 13.9044 2.80975C14.2395 3.12518 14.2555 3.65258 13.9401 3.98773L7.81095 10.4999L13.9401 17.0121C14.2555 17.3473 14.2395 17.8747 13.9044 18.1901C13.5692 18.5055 13.0418 18.4895 12.7264 18.1544L6.59729 11.6422Z"
        fill="#F56630"
      />
    </svg>
  );

  static nextArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path
        d="M13.4025 11.6422C14.0065 11.0004 14.0065 9.9994 13.4025 9.35765L7.27342 2.84545C6.95799 2.51031 6.4306 2.49432 6.09545 2.80975C5.76031 3.12518 5.74432 3.65258 6.05975 3.98773L12.1889 10.4999L6.05975 17.0121C5.74432 17.3473 5.76031 17.8747 6.09545 18.1901C6.4306 18.5055 6.95799 18.4895 7.27342 18.1544L13.4025 11.6422Z"
        fill="#F56630"
      />
    </svg>
  );

  static downArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
      <path
        d="M1.87638 6.31888L7.08614 11.2222C7.59954 11.7054 8.40038 11.7054 8.91378 11.2222L14.1235 6.31888C14.3917 6.06654 14.4044 5.64462 14.1521 5.37651C13.8997 5.10839 13.4778 5.09561 13.2097 5.34795L7.99996 10.2513L2.7902 5.34795C2.52209 5.09561 2.10017 5.10839 1.84783 5.37651C1.59548 5.64462 1.60827 6.06654 1.87638 6.31888Z"
        fill="#F56630"
      />
    </svg>
  );

  static calendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z"
        stroke="#667185"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M10.6666 1.33325V3.99992" stroke="#667185" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5.33337 1.33325V3.99992" stroke="#667185" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2 6.66675H14" stroke="#667185" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );

  static closeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
      <path
        fill="#8f95b2"
        d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z"
      />
    </svg>
  );
}

export class DockedUtilityIcons {
  static folderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path d="M8 2H17C19 2 20 3 20 5V6.38" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export class MapIcons {
  static locationIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 18.825s5-6.08 5-8.82-2.239-4.963-5-4.963-5 2.222-5 4.963 5 8.82 5 8.82m1.532 1.313L12 22l-1.532-1.862-.234-.291q-.27-.339-.591-.758c-.61-.797-1.22-1.64-1.793-2.492q-.621-.925-1.13-1.794C5.624 12.92 5 11.37 5 10.005A7 7 0 0 1 12 3c3.854 0 7 3.123 7 7.005 0 1.365-.623 2.916-1.72 4.798q-.509.87-1.13 1.794a50 50 0 0 1-2.618 3.54M12 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        fill="#ffffff"
      />
    </svg>
  );
}

export class ModalIcons {
  static armsCloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
        fill="#696F8C"
      />
    </svg>
  );

  static xRoundedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
      <path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" />
    </svg>
  );

  static xIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
    </svg>
  );

  static roundedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z" />
      <path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z" />
    </svg>
  );

  static squareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.4 14L12 13.4L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4L13.4 12l3.6 3.6l-1.4 1.4Z"
      />
    </svg>
  );
}

export class NavBarIcons {
  static searchIcon = (clickHandler: () => void) => (
    <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#dd5928" fill-rule="evenodd" d="m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426M10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12" />
    </svg>
  );

  static closeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
      <path
        fill="#dd5928"
        d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326a.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042L6.94 8L3.72 4.78a.75.75 0 0 1 0-1.06"
      />
    </svg>
  );
}

export class PaginationIcons {
  static prevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
      <path
        fill="#8F95B2"
        d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6"
      />
    </svg>
  );

  static nextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
      <path
        fill="#8F95B2"
        d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4"
      />
    </svg>
  );
}

export class ProgressBarIcons {
  static successIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-.232-5.36 5-6-1.536-1.28-4.3 5.159-2.225-2.226-1.414 1.414 3 3 .774.774z"
        fill="#52bd94"
      />
    </svg>
  );
  static errorIcon = () => (
    <svg width="19" height="19" viewBox="0 0 56 56" fill="#d14343" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906 0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-8.672-13.218c-1.172 0-1.992-.915-1.992-2.04 0-.586.281-1.171.844-1.734l16.71-16.71c.54-.54 1.126-.845 1.688-.845a2.07 2.07 0 0 1 2.086 2.063c0 .562-.328 1.148-.844 1.687L21.086 37.844c-.54.539-1.055.843-1.758.843" />
    </svg>
  );
}

export class SelectIcons {
  static arrowIcon = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="black" d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939L6.28 8.22a.749.749 0 0 0-1.06 0" />
      </svg>
    </div>
  );

  static checkmarkIcon = () => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check select-menu-item-icon">
      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
    </svg>
  );

  static dotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="6" fill="#626262" />
    </svg>
  );

  static checkRoundedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export class SnackbarIcons {
  static closeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path
        fill="#696F8C"
        d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm-81-337c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
      />
    </svg>
  );

  static errorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path
        fill="#D14343"
        d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm-32 224a32 32 0 1 1 64 0 32 32 0 1 1-64 0z"
      />
    </svg>
  );
}

export class TimePickerIcons {
  static clockIcon = (size: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="#8f95b2"
        d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"
      />
    </svg>
  );

  static closeIcon = (size: string, clickHandler: (e: MouseEvent) => void) => (
    <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <path
        fill="#8f95b2"
        d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z"
      />
    </svg>
  );
}

export class ValidationIcons {
  static armsCloseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8883d394="">
      <path
        d="M10.5 0C8.52219 0 6.58879 0.58649 4.9443 1.6853C3.29981 2.78412 2.01809 4.3459 1.26121 6.17317C0.504333 8.00043 0.306299 10.0111 0.692152 11.9509C1.078 13.8907 2.03041 15.6725 3.42894 17.0711C4.82746 18.4696 6.60929 19.422 8.5491 19.8079C10.4889 20.1937 12.4996 19.9957 14.3268 19.2388C16.1541 18.4819 17.7159 17.2002 18.8147 15.5557C19.9135 13.9112 20.5 11.9778 20.5 10C20.4958 7.34913 19.4408 4.80805 17.5664 2.93361C15.692 1.05916 13.1509 0.00423124 10.5 0ZM13.86 12.3C13.9995 12.4411 14.0777 12.6316 14.0777 12.83C14.0777 13.0284 13.9995 13.2189 13.86 13.36C13.7905 13.4298 13.7079 13.4852 13.617 13.5229C13.526 13.5607 13.4285 13.5802 13.33 13.5802C13.2315 13.5802 13.134 13.5607 13.043 13.5229C12.9521 13.4852 12.8695 13.4298 12.8 13.36L10.5 11.06L8.2 13.36C8.13051 13.4298 8.04791 13.4852 7.95696 13.5229C7.86601 13.5607 7.76849 13.5802 7.67 13.5802C7.57152 13.5802 7.474 13.5607 7.38305 13.5229C7.2921 13.4852 7.2095 13.4298 7.14 13.36C7.00052 13.2189 6.9223 13.0284 6.9223 12.83C6.9223 12.6316 7.00052 12.4411 7.14 12.3L9.44 10L7.14 7.7C7.00752 7.55783 6.9354 7.36978 6.93883 7.17548C6.94226 6.98118 7.02097 6.79579 7.15838 6.65838C7.2958 6.52097 7.48118 6.44225 7.67548 6.43883C7.86978 6.4354 8.05783 6.50752 8.2 6.64L10.5 8.94L12.8 6.64C12.9422 6.50752 13.1302 6.4354 13.3245 6.43883C13.5188 6.44225 13.7042 6.52097 13.8416 6.65838C13.979 6.79579 14.0578 6.98118 14.0612 7.17548C14.0646 7.36978 13.9925 7.55783 13.86 7.7L11.56 10L13.86 12.3Z"
        fill="#D14342"
        data-v-8883d394=""
      ></path>
    </svg>
  );

  static xCloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#D14342" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
    </svg>
  );

  static xRoundedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
      <path fill="#D14342" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" />
    </svg>
  );

  static squareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="#D14342"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.4 14L12 13.4L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4L13.4 12l3.6 3.6l-1.4 1.4Z"
      />
    </svg>
  );
}
