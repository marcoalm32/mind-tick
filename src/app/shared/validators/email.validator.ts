import { computed, Signal } from "@angular/core";

type EmailField = () => {
    errors: Signal<Array<{ message?: string }> | undefined>;
}

export const emailValidator = (
    email: EmailField,
    emailStarted: Signal<boolean>
) => {

    return computed(() => {
        if (!emailStarted()) {
            return '';
        }

        const errors = email().errors() ?? [];
        return errors[0]?.message ?? '';
    });
}