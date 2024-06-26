/**
 * API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { RiskResponsePagingResource } from '../model/riskResponsePagingResource';
import { RiskResponseResource } from '../model/riskResponseResource';
import { RiskResponseStoreRequest } from '../model/riskResponseStoreRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RiskResponsesService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Delete RiskResponse
     * Deletes a single RiskResponse
     * @param id RiskResponse id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRiskResponse(id: number, observe?: 'body', reportProgress?: boolean): Observable<RiskResponseResource>;
    public deleteRiskResponse(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RiskResponseResource>>;
    public deleteRiskResponse(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RiskResponseResource>>;
    public deleteRiskResponse(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteRiskResponse.');
        }

        let headers = this.defaultHeaders;

        // authentication (sanctum) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<RiskResponseResource>(`${this.basePath}/api/risk-responses/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lists risk-responses
     * 
     * @param page Page number
     * @param count Number of items per page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listRiskResponses(page?: number, count?: number, observe?: 'body', reportProgress?: boolean): Observable<RiskResponsePagingResource>;
    public listRiskResponses(page?: number, count?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RiskResponsePagingResource>>;
    public listRiskResponses(page?: number, count?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RiskResponsePagingResource>>;
    public listRiskResponses(page?: number, count?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (count !== undefined && count !== null) {
            queryParameters = queryParameters.set('count', <any>count);
        }

        let headers = this.defaultHeaders;

        // authentication (sanctum) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<RiskResponsePagingResource>(`${this.basePath}/api/risk-responses`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get RiskResponse information
     * Returns RiskResponse data
     * @param id RiskResponse id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public showRiskResponse(id: number, observe?: 'body', reportProgress?: boolean): Observable<RiskResponseResource>;
    public showRiskResponse(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RiskResponseResource>>;
    public showRiskResponse(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RiskResponseResource>>;
    public showRiskResponse(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling showRiskResponse.');
        }

        let headers = this.defaultHeaders;

        // authentication (sanctum) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<RiskResponseResource>(`${this.basePath}/api/risk-responses/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Adds a new risk-response
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public storeRiskResponse(body?: RiskResponseStoreRequest, observe?: 'body', reportProgress?: boolean): Observable<RiskResponseResource>;
    public storeRiskResponse(body?: RiskResponseStoreRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RiskResponseResource>>;
    public storeRiskResponse(body?: RiskResponseStoreRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RiskResponseResource>>;
    public storeRiskResponse(body?: RiskResponseStoreRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (sanctum) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<RiskResponseResource>(`${this.basePath}/api/risk-responses`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update RiskResponse information
     * Returns updated RiskResponse data
     * @param id RiskResponse id
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRiskResponse(id: number, body?: RiskResponseStoreRequest, observe?: 'body', reportProgress?: boolean): Observable<RiskResponseResource>;
    public updateRiskResponse(id: number, body?: RiskResponseStoreRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RiskResponseResource>>;
    public updateRiskResponse(id: number, body?: RiskResponseStoreRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RiskResponseResource>>;
    public updateRiskResponse(id: number, body?: RiskResponseStoreRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateRiskResponse.');
        }


        let headers = this.defaultHeaders;

        // authentication (sanctum) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<RiskResponseResource>(`${this.basePath}/api/risk-responses/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
