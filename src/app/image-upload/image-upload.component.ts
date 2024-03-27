import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress?: 0;
  message?: '';
  preview!: '';

  imageInfos?: Observable<any>;


  constructor(private  uploadService: UploadFileService) { }

  ngOnInit(): void {
  }

}
