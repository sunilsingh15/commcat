import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  apiLoaded!: Observable<boolean>;
  options!: google.maps.MapOptions;
  markerOptions!: google.maps.MarkerOptions;
  markerPositions!: google.maps.LatLngLiteral[];
  catName: string = 'Cat';

  @ViewChild(MapInfoWindow)
  infoWindow!: MapInfoWindow;

  ngOnInit(): void {
    this.loadGoogleMapsApi().subscribe(() => {
      this.apiLoaded = of(true);

      this.options = {
        mapId: 'b155309acfe67a51',
        center: { lat: 1.34, lng: 103.82 },
        zoom: 11.5,
        disableDefaultUI: true
      };

      this.markerOptions = {
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: {
          url: 'assets/marker.png',
          scaledSize: new google.maps.Size(20, 20)
        }
      };

      this.markerPositions = [
        { lat: 1.42, lng: 103.8 },
        { lat: 1.335, lng: 103.9 },
        { lat: 1.345, lng: 103.96 },
        { lat: 1.365, lng: 103.72 },
        { lat: 1.315, lng: 103.69 },
        {lat: 1.3732241859585121, lng: 103.74611465231567}
      ];

    }, () => {
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

  openWindow(marker: MapMarker) {
    console.log(marker.getPosition()?.toJSON());

    this.infoWindow.open(marker);
  }
}
