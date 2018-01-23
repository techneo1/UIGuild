1. User Input 
2. Template-driven forms
3. Form validation
4. Reactive Forms
5. Dynamic Forms

1. Binding to user input events using Event binding (click)
2. Get user input from the $event object [NOT recommended]
- Type the $event using HTMLInputElement
- Passing $event is dubious practice, coz it breaks the SoC between the template and the component
3. Get user input from a template reference variable
- It won't work at all, unless you bind to an event.
