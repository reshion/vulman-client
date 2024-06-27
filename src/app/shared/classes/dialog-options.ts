export class DialogOptions
{
    ok: boolean = true;
    cancel: boolean = true;
    async: boolean = false;

    /**
     * 
     * @param params ok?: boolean, cancel?: boolean, async?: boolean
     */
    constructor(public params?: { ok?: boolean, cancel?: boolean, async?: boolean })
    {
        if (params)
        {
            this.ok = typeof params.ok !== 'undefined' ? params.ok : this.ok;
            this.cancel = typeof params.cancel !== 'undefined' ? params.cancel : this.cancel;
            this.async = typeof params.async !== 'undefined' ? params.async : this.async;
        }

    }
}