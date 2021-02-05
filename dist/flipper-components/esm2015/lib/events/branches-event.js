import { BusEvent } from '@enexus/flipper-event';
export class BranchesEvent extends BusEvent {
    constructor(branches) {
        super(BranchesEvent.CHANNEL);
        this.branches = branches;
    }
}
BranchesEvent.CHANNEL = 'branches';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmNoZXMtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9mbGlwcGVyLWNvbXBvbmVudHMvc3JjL2xpYi9ldmVudHMvYnJhbmNoZXMtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBR2hELE1BQU0sT0FBTyxhQUFjLFNBQVEsUUFBUTtJQUd6QyxZQUFtQixRQUFrQjtRQUNuQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRFgsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUVyQyxDQUFDOztBQUpzQixxQkFBTyxHQUFHLFVBQVUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1c0V2ZW50IH0gZnJvbSAnQGVuZXh1cy9mbGlwcGVyLWV2ZW50J1xyXG5pbXBvcnQgeyBCcmFuY2ggfSBmcm9tICcuLi9lbnRyaWVzL2JyYW5jaCdcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmFuY2hlc0V2ZW50IGV4dGVuZHMgQnVzRXZlbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0hBTk5FTCA9ICdicmFuY2hlcydcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGJyYW5jaGVzOiBCcmFuY2hbXSkge1xyXG4gICAgc3VwZXIoQnJhbmNoZXNFdmVudC5DSEFOTkVMKVxyXG4gIH1cclxufVxyXG4iXX0=