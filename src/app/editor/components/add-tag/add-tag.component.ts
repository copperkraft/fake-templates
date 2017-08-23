import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TagService } from '../../../services/tag/tag.service';
import { Tag } from '../../../classes/tag';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.less']
})
export class AddTagComponent implements OnInit {
  @Input() tags: Tag[];
  @Output() tagsChange = new EventEmitter<Tag[]>();

  constructor(
    private tagService: TagService
  ) { }

  addTag(name: string) {
    if (name) {
      this.tagService.addTag(name)
        .then(() => this.tagService.getTags()
          .then(tags => this.tagsChange.emit(tags))
        );
    }
  }

  ngOnInit() {
  }
}
