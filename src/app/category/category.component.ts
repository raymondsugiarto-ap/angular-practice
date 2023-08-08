import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() categories = [
    {
      id: '1',
      name: 'Pakaian',
      categories: [
        {
          id: '2',
          name: 'Pakaian Pria',
          categories: [
            {
              id: '3',
              name: 'Kemeja',
              categories: [
                {
                  id: '4',
                  name: 'Kemeja Lengan Panjang'
                },
              ]
            },
            {
              id: '5',
              name: 'Celana'
            }
          ]
        },
        {
          id: '6',
          name: 'Pakaian Wanita'
        }
      ]
    },
    {
      id: '7',
      name: 'Elektronik',
      categories: [
        {
          id: '8',
          name: 'Handphone'
        },
        {
          id: '9',
          name: 'Laptop'
        }
      ]
    },
    {
      id: '10',
      name: 'Makanan',
    }
  ]

  hide: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.hide = !this.hide
  }

  onCheckedChange(category: any) {
    this.categories.filter((c: any) => c.id === category.id)
      .forEach((c: any) => {
        c.checked = !category.checked
        if (c.categories) {
          this.checkedChild(c, c.checked)
          this.onCheckedChange(c.categories)
        }
      })
  }

  checkedChild(category: any, checked: boolean) {
    category.categories.forEach((c: any) => {
        c.checked = checked
        if (c.categories) {
          this.checkedChild(c, checked)
        }
    })
  }

}
