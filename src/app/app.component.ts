import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stars Wars App';

  public ngOnInit()
  {
    $(document).ready(function(){
      var $toggle  = $('.menu-sable'),
      $menuWrap = $('.menu-wrap')
      $toggle.on('click',function(){
          $(this).toggleClass('button-open');
          $menuWrap.toggleClass('menu-show');
        })
    });
    
  }
}


