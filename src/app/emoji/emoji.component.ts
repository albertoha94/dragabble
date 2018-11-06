import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {
  doc: any;

  constructor() { }

  ngOnInit() {
    this.doc = {
      favs: [
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
      ]
    };
  }

  update(e) {
    console.log('Updated>', e);
  }
}
