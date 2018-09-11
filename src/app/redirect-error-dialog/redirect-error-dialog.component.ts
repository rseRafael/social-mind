import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-redirect-error-dialog',
  templateUrl: './redirect-error-dialog.component.html',
  styleUrls: ['./redirect-error-dialog.component.css']
})
export class RedirectErrorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RedirectErrorDialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
