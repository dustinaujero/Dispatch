export const LOADING = "LOADING";
export const CLEAR_LOADING = "CLEAR_LOADING";

export const loading = () => (
    {
        type: LOADING
    }
);

export const clearLoading = () => (
    {
        type: CLEAR_LOADING
    }
);