import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  createTeamForm: FormGroup;
  
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.reactive()
  }

  reactive() {
    this.createTeamForm = this._formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submit() {
    if (this.createTeamForm.valid) {
      const { name } = this.createTeamForm.value;
      this._router.navigate(['/', decodeURIComponent(name)]);
    }
  }
}
