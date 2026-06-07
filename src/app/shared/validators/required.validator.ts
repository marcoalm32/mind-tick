import { computed, Signal } from "@angular/core";

type RequiredField = () => {
    errors: Signal<Array<{ message?: string }> | undefined>;
}

export const requiredValidator = (
    field: RequiredField,
    fieldStarted: Signal<boolean>
) => {
    return computed(() => {
        if (!fieldStarted()) {
            return '';
        }

        const errors = field().errors() ?? [];
        return errors[0]?.message ?? '';
    });
}