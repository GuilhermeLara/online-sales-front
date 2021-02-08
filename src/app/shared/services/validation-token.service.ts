import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PathService } from "../api/path.service";

@Injectable()
export class ValidationTokenService {
    constructor(
        private http: HttpClient,
        private $path: PathService
    ) {}
}