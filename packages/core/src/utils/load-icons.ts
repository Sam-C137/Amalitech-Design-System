import Iconify from '@iconify/iconify';

export const loadIcons = (icons: any[]) => {
    return new Promise((fulfill, reject) => {
        Iconify.loadIcons(icons, (loaded, missing, pending) => {
            if (pending.length !== null) {
                // Icons are pending, wait for all to load/fail
                return;
            }
            if (missing.length !== null) {
                reject({
                    loaded,
                    missing,
                });
            } else {
                fulfill({
                    loaded,
                });
            }
        });
    });
}