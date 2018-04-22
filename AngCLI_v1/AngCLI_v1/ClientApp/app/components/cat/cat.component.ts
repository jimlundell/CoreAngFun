import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'cat',
    templateUrl: './cat.component.html',
    styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
    //cat = new Object(); //??
    //catlink: Subscription = new Subscription();
    catURL: string = 'https://random.dog/woof.json'; //https://aws.random.cat/meow
    catlink: string = '';

    @Input() cat = 'init';
    @Output() catChange = new EventEmitter<string>();

    constructor(private http: Http) {
        console.log('entered constructor');
    }

    ngOnInit() {
        //get a cat
        this.getData();
    }

    get newCat() {
        return this.getData();
    }

    // service
    getData() {
        //console.log('returning data');
        //return this.http.get(this.catURL)
        //    .map(( //observable
        //        res: Response) => {
        //            console.log(res);
        //    });

        console.log('getting data');
        return this.http
            .get(this.catURL)
            .subscribe((res: Response) => {
                var data = res.json();
                console.log(data.url);
                this.cat = data.url;
                this.catChange.emit(this.cat);
                //return data.url;
            })

        //return this.http.get(this.catURL)
        //    .map(( //observable
        //        res: Response) => res.arrayBuffer)

        //return this.http
        //    .get(this.catURL)
        //    .subscribe(data => {
        //        // Read the result field from the JSON response.
        //        //var results = data['results'];
        //        console.log(data["bytesLoaded"]);
        //        console.log('done');
        //    })

        //return this.http
        //    .get(this.catURL)
        //    .subscribe((res: Response) => {
        //        // Read the result field from the JSON response.
        //        //var results = data['results'];
        //        this.cat = res.totalBytes;
        //        //console.log(res.arrayBuffer.length);
        //        console.log('done');
        //    })
    }

}

