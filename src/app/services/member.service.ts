import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../../models/Member";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})


//decorator for components services injecting
export class MemberService {
  url = 'http://localhost:3000/members';


  constructor(private http: HttpClient) {
  }

  addMember(x: Member): Observable<void> {
    return this.http.post<void>('http://localhost:3000/members', x);
  }

  /** DELETE: delete the hero from the server */
  deleteMember(id: number): Observable<void> {
    console.log("aaaa");
    const urlId = `http://localhost:3000/members/${id}`;
    return this.http.delete<void>(urlId);
  }

  async getAllMembers(): Promise<Member[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  getMemberById(id: string): Observable<Member> {
    console.log(`http://localhost:3000/members/${id}`);
    return this.http.get<Member>(`http://localhost:3000/members/${id}`);
  }

  updateMember(id: string, member: Member): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/members/${id}`, member);
  }
}
