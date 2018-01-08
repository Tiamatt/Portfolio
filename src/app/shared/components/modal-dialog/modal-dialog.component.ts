import { Component, OnInit, ElementRef, ContentChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ModalDialogModel } from './modal-dialog.model';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit, OnChanges {
  @ContentChild('modalDialogBody') modalDialogBodyFromParent: ElementRef; 
  @Input() input:ModalDialogModel;
  
  constructor() { }

  ngOnInit() { }

  ngOnChanges(){ }
}