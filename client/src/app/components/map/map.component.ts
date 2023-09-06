// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Observable, catchError, map, of } from 'rxjs';

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.css']
// })
// export class MapComponent {

//   apiLoaded: Observable<boolean>;

//   constructor(http: HttpClient) {
//       this.apiLoaded = http.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyChsTTTpJbSqI7lhm8-ZhzwcJsKbuV8408', 'callback')
//         .pipe(
//           map(() => true),
//           catchError(() => of(false)),
//         );
//   }

//   options: google.maps.MapOptions = {
//     mapId: 'b155309acfe67a51',
//     center: { lat: 1.335, lng: 103.8 },
//     zoom: 11.5,
//     disableDefaultUI: true
//   }

//   markerOptions: google.maps.MarkerOptions = {
//     draggable: false,
//     // animation: google.maps.Animation.DROP,
//     icon: {
//       url: 'assets/cat-marker.png',
//       // scaledSize: new google.maps.Size(20, 20)
//     }
//   }

//   markerPositions: google.maps.LatLngLiteral[] = [
//     { lat: 1.335, lng: 103.8 },
//     { lat: 1.335, lng: 103.9 }
//   ];

// }

import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // constructor(private http: HttpClient) {}

  apiLoaded!: Observable<boolean>;
  options!: google.maps.MapOptions;
  markerOptions!: google.maps.MarkerOptions;
  markerPositions!: google.maps.LatLngLiteral[];

  ngOnInit(): void {
    this.loadGoogleMapsApi().subscribe(() => {
      // Google Maps API is loaded and ready
      this.apiLoaded = of(true);

      // Initialize your map and marker options here
      this.options = {
        mapId: 'b155309acfe67a51',
        center: { lat: 1.335, lng: 103.8 },
        zoom: 11.5,
        disableDefaultUI: true
      };

      this.markerOptions = {
        draggable: false,
        icon: {
          url: 'assets/cat-marker.png',
          scaledSize: new google.maps.Size(20, 20)
        }
      };

      this.markerPositions = [
        { lat: 1.42, lng: 103.8 },
        { lat: 1.335, lng: 103.9 },
        { lat: 1.345, lng: 103.96 },
        { lat: 1.365, lng: 103.72 },
        { lat: 1.315, lng: 103.69 }
      ];
    }, () => {
      // Handle API loading error
      this.apiLoaded = of(false);
    });
  }

  loadGoogleMapsApi(): Observable<void> {
    return new Observable<void>((observer) => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyChsTTTpJbSqI7lhm8-ZhzwcJsKbuV8408';
      script.async = true;
      script.defer = true;

      script.onload = () => {
        observer.next();
        observer.complete();
      };

      script.onerror = (error) => {
        observer.error(error);
      };

      document.body.appendChild(script);
    });
  }
}
