import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class MainVariableService {
  public activeEN: boolean = true;
  public activeDE: boolean = false;
  public isSmallScreen: boolean = false;
  public isMediumScreen: boolean = false;
  public movemouse: boolean = false;
  public hoverGrowthMindset: boolean = false;
  public hoverProjecScreen: boolean = false;
  public hoverLetsTalk: boolean = false;
  public legalNotice: boolean = false;
  public navLegalPrivacy: boolean = false;



  constructor(private breakpointObserver: BreakpointObserver, private router: Router, public location: Location) {
    this.breakpointObserver.observe(['(max-width: 1000px)']).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
    this.breakpointObserver.observe(['(max-width: 750px)']).subscribe(result => {
      this.isMediumScreen = result.matches;
    });

    this.breakpointObserver.observe(['(max-width: 1040px)']).subscribe(result => {
      this.hoverProjecScreen = result.matches;
    });

  }



  
  mouseMove() {
    this.movemouse = true;
  }
  activeENFunc() {
    this.activeEN = true;
    this.activeDE = false;
  }

  activeDEFunc() {
    this.activeEN = false;
    this.activeDE = true;
  }
  scrollTo(section: string) {
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  scrollToAndCloseDialog(section: string, dialogRef: any) {
    dialogRef.close();
    setTimeout(() => {
      this.scrollTo(section);
    }, 200);
  }

  scrollToAndCloseDialogBackMain(section: string, dialogRef: any) {
    dialogRef.close();
    this.legalNoticeClose();
    this.router.navigate(['']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });

  }

  legalNoticeAktive() {
    this.legalNotice = true;
    this.navLegalPrivacy = true;
  }

  privacyAktive() {
    this.navLegalPrivacy = true;
  }

  legalNoticeClose() {
    this.legalNotice = false;
    this.navLegalPrivacy = false;
  }

  backMain(section: string) {
    this.navLegalPrivacy = false;
    this.legalNotice = false;
    this.router.navigate(['']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
  redirectToHome() {
    this.location.replaceState('/');
  }
}




