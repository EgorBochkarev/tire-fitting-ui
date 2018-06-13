Ext.define('Override.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',
    time: function(value) {
        return this.timeRe.test(value);
    },
    timeRe: /^\d/,
    timeText: 'Not a Number',
    timeMask: /[\d]/
});

