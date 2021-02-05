import { BusEvent } from '@enexus/flipper-event';
import { CHANNELS } from './channels';
export class PriceVariantEvent extends BusEvent {
    constructor(priceVariant) {
        super(PriceVariantEvent.CHANNEL);
        this.priceVariant = priceVariant;
    }
}
PriceVariantEvent.CHANNEL = CHANNELS.PRICEVARIANTS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UtdmFyaWFudC1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ZsaXBwZXItY29tcG9uZW50cy9zcmMvbGliL2V2ZW50cy9wcmljZS12YXJpYW50LWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBR3JDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxRQUFRO0lBRzdDLFlBQW1CLFlBQTBCO1FBQzNDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQURmLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBRTdDLENBQUM7O0FBSnNCLHlCQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1c0V2ZW50IH0gZnJvbSAnQGVuZXh1cy9mbGlwcGVyLWV2ZW50J1xyXG5pbXBvcnQgeyBDSEFOTkVMUyB9IGZyb20gJy4vY2hhbm5lbHMnXHJcbmltcG9ydCB7IFByaWNlVmFyaWFudCB9IGZyb20gJy4uL2VudHJpZXMnXHJcblxyXG5leHBvcnQgY2xhc3MgUHJpY2VWYXJpYW50RXZlbnQgZXh0ZW5kcyBCdXNFdmVudCB7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBDSEFOTkVMID0gQ0hBTk5FTFMuUFJJQ0VWQVJJQU5UU1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJpY2VWYXJpYW50OiBQcmljZVZhcmlhbnQpIHtcclxuICAgIHN1cGVyKFByaWNlVmFyaWFudEV2ZW50LkNIQU5ORUwpXHJcbiAgfVxyXG59XHJcbiJdfQ==