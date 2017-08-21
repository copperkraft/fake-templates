import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TagService} from '../../services/tag/tag.service';
import {Tag} from '../../classes/tag';
import {templateJitUrl} from '@angular/compiler';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.less']
})
export class TagListComponent implements OnInit {
  tags: Tag[];
  @Input() selected: Tag[];
  @Output() selectedChange = new EventEmitter<Tag[]>();

  constructor(
    private tagService: TagService
  ) { }

  isSelected(tag: Tag) {
    return this.selected.some((item: Tag) => tag.id === item.id);
  }

  toggleSelection(target: Tag) {
    if (this.selected.some((tag: Tag) => tag.id === target.id)) {
      this.selected = this.selected.filter((tag: Tag) => tag.id !== target.id);
    } else {
      this.selected.push(target);
    }
    this.selectedChange.emit(this.selected);
  }

  ngOnInit() {
    this.tagService.getTags().then(tags => {
      this.tags = tags;
    });
  }
}
