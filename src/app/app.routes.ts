import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { Databinding } from './components/databinding/databinding';
import { Signal } from './components/signal/signal';
import { Notfound } from './components/notfound/notfound';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'variable', component: Variables },
    { path: 'databinding', component: Databinding },
    { path: 'signal', component: Signal},
    { path: '**', component: Notfound}
];
