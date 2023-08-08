import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() label: string = 'Laptop'
  @Input() checked: boolean = true
  @Output() checkedChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.checked = !this.checked
    this.checkedChange.emit(this.checked)
  }

}
