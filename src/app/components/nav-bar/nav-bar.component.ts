import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { AddProductComponent } from '../products/add-product/add-product.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '40%',
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result afterClosed', result)
    })
  }
}
