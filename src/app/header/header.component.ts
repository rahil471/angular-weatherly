import { Component } from '@angular/core';

@Component({
    'selector': "app-header",
    'template': `<nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            Angular Weatherly
                        </a>
                        </div>
                    </div>
                </nav>`
})
export class HeaderComponent {
    constructor(){

    }
}