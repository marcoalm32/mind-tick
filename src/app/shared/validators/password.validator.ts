import { computed, Signal } from '@angular/core';

type PasswordField = () => {
    errors: Signal<Array<{ message?: string }> | undefined>;
};

export const passwordValidator = (
    password: PasswordField,
    passwordStarted: Signal<boolean>
) => {
    return computed(() => {
        if (!passwordStarted()) {
            return '';
        }

        const errors = password().errors() ?? [];
        return errors[0]?.message ?? '';
    });
};