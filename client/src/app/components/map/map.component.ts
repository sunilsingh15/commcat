import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable, Subscription, of } from 'rxjs';
import { CommcatService } from 'src/app/commcat.service';

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
  catImage: string = '';
  catId: string = '';
  isLoading: boolean = true;

  service = inject(CommcatService);
  mapSub$!: Subscription;
  markerSub$!: Subscription;

  @ViewChild(MapInfoWindow)
  infoWindow!: MapInfoWindow;

  ngOnInit(): void {

    this.mapSub$ = this.service.getCoordinates().subscribe({
      next: (result) => {
        this.markerPositions = result.map(item => ({
          lat: item.lat,
          lng: item.lng
        }))
      },
      error: (err) => { console.log(err); },
      complete: () => { this.mapSub$.unsubscribe(); }
    });

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

    this.isLoading = true;

    const markerLoc = marker.getPosition()?.toJSON();

    if (markerLoc && markerLoc.lat !== undefined && markerLoc.lng !== undefined) {
      this.markerSub$ = this.service.getCatInfoForWindow(markerLoc.lat, markerLoc.lng).subscribe({
        next: (result) => {
          this.catId = result.id;
          this.catName = result.name;
          this.catImage = result.url;
          this.isLoading = false;
        },
        error: (err) => { console.log(err); },
        complete: () => { this.markerSub$.unsubscribe(); }
      });
    } else {
      return;
    }

    this.infoWindow.open(marker);
  }
}
