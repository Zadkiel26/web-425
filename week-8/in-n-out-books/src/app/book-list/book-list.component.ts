/**
 * Title: book-list.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 4/19/2024
 * Description: Book list component
 */
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Array<IBook> = [];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            });
          }

          console.log(res[key].details);

          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    });
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent,{
      data: { book: this.book },
      disableClose: true,
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => { if (result === 'confirm') { this.book = null; } });
  }
}
