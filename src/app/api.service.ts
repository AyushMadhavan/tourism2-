import { state } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() 
  {

  }
  district = 
  [
    {
      id: 1,
      name: "Andhra Pradesh",
      image: "https://imgs.search.brave.com/s88079uJZd5JF6YChhcB4Xrfs8Dfhb3-x0xrhdalFNA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFhL1JvY2stY3V0/X0xvcmRfLS1CdWRk/aGEtLV9TdGF0dWVf/YXRfQm9qamFuYWtv/bmRhX25lYXJfQW5h/a2FwYWxsZV9vZl9W/aXNha2hhcGF0bmFt/X2Rpc3RfaW5fQVAu/anBn"
    },
    {
      id: 2,
      name: "Arunachal Pradesh",
      image: "https://imgs.search.brave.com/S1kiKVDjHARtRkMlNEyxB1lWg4RShu9orOKVWKwL7KY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9scC1j/bXMtcHJvZHVjdGlv/bi5pbWdpeC5uZXQv/MjAyMi0wMi9EaWJh/bmclMjBWYWxsZXku/anBnP3c9NzMwJmg9/NjMwJmZpdD1jcm9w/JmF1dG89Zm9ybWF0/JnE9NzU"
    },
    {
      id: 3,
      name: "Assam",
      image: "https://imgs.search.brave.com/qRSEQth1-QGfrOx_JQrcQ3exwKDILLAvSijeOhsvgDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzczL0dhcmdhb24n/cl9LYXJlbmdfR2hv/cl9TaWRlX1ZpZXcu/SlBH"
    },
    {
      id: 4,
      name: "Bihar",
      image: "https://imgs.search.brave.com/l3TXYx-qKqdrfLcVvwmCRiMm-vVwoQjZShhreNMwh_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0Zsb29kZWRf/QmloYXIuSlBH"
    },
    {
      id: 5,
      name: "Chhattisgarh",
      image: "https://imgs.search.brave.com/X4vY0frTtr55u2C53kgOC9RqFC1YzxL3JwVq40dyxW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NjY2NTQwNS9waG90/by9yYW0tbWFuZGly/LWluLXJhaXB1ci1j/aGhhdHRpc2dhcmgu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVY0TkFDalFDa1Bf/SThKSlBmVngxSmJq/UkJFRkJ4S0ktc2V5/dkFqc1ZxRjQ9"
    },
    {
      id: 6,
      name: "Goa",
      image: "https://imgs.search.brave.com/MbgPHdVRIBN6tRkixOVhqTiLk2BWC5hdbEr4IO2SNaI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/MTQ0NTM4L3Bob3Rv/L2dvYS1wYWxvbGVt/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz14cjlvaE56QmIw/cEx4aDJRbUJVWlFU/XzZTNWY0R2Z6aldV/ZGhLNGZmZi1rPQ"
    },
    {
      id: 7,
      name: "Gujarat",
      image: "https://imgs.search.brave.com/AM0_9oeMAMghSgGfqFvym1eH5IAcuI9OsMlltnlW-Fo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc3L1N1bl9UZW1w/bGVfU2FiaGFfTWFu/ZGFwLkpQRw"
    },
    {
      id: 8,
      name: "Haryana",
      image: "https://imgs.search.brave.com/CXYOPUDl5vC7wcTZjiPL-zvccNTEx8k_cT2eSEHLxfY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMTAvMTYxMC0w/NTAtQzgwQzk5MDEv/RmFybWVycy1maWVs/ZHMtWWFtdW5hbmFn/YXItSW5kaWEtSGFy/eWFuYS5qcGc_dz03/NDAmaD00MTYmYz1j/cm9w"
    },
    {
      id: 9,
      name: "Himachal Pradesh",
      image: "https://imgs.search.brave.com/UcpK03kfktexjhoqsxMylmovMnjmNbagI3V6SrLi5Ek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JlL1NoaXZhbGlr/c19IaW1hbGF5YXNf/QWVyaWFsX0RlaGF6/ZV9IaW1hY2hhbF9G/ZWIyMF9SMTZfMDI4/MjcuanBn"
    },
    {
      id: 10,
      name: "Jharkhand",
      image: "https://imgs.search.brave.com/Y1HF-qFW5FfInVjbL6dbduxGbdTWhM2VJaBRDnYMaZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2UxL0hvbHlfUHJh/eWVyLmpwZw"
    },
    {
      id: 11,
      name: "Karnataka",
      image: "https://imgs.search.brave.com/4JdNAcQ3G9cQed-X_qDSCdHVo2yAFF_56vFvCTJBazY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/MjM4NDI4Mi9waG90/by9iYW5nYWxvcmUt/b3ItYmVuZ2FsdXJ1/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz02cHh3TDNKeE5W/MkJfTlpTTE1aTGhy/U0xxQWJ5Q1BsR3VT/WllLSW1waktRPQ"
    },
    {
      id: 12,
      name: "Kerala",
      image: "https://imgs.search.brave.com/Okc2dLyMGAjUUGiHEj_a_JrqiBdPFAgGRcg9MONLSDk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcy/OTA5NDQyL3Bob3Rv/L2JhY2t3YXRlcnMt/b2Yta2VyYWxhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1p/YndSaVpKWkdjeEc1/TUxXRlVvd2NYTTlY/SzNuWm5rbGs5Wkgx/UXVzM0M0PQ"
    },
    {
      id: 13,
      name: "Madhya Pradesh",
      image: "https://imgs.search.brave.com/RlQWWkRP_7n6Ww3djLywRwMN-ZfLiuT3gszQKDE25Fo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQzMTkw/NzUuanBn"
    },
    {
      id: 14,
      name: "Maharashtra",
      image: "https://imgs.search.brave.com/wK381ZfulSmwUhhS54hx9Fg0rxXMligjVUk1b8W_TkQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTk4/OTY2Nzc4L3Bob3Rv/L211bWJhaS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9QzZo/dTM4eG5JUC1GTmRa/cWRVOTJHOEx6YUJD/SXRtOTAzT05XaFBT/WjNibz0"
    },
    {
      id: 15,
      name: "Manipur",
      image: "https://imgs.search.brave.com/d23IhZTGIRaWLXh6VPcdgIzwx0HXQc8qyStk1t8pXPI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY0L0JlbmdhbF9n/YXpldHRlZXJfMTkw/Ny05LmpwZw"
    },
    {
      id: 16,
      name: "Meghalaya",
      image: "https://imgs.search.brave.com/4RKDVFvZZW5xflAFS1GuGerBjLRHr5tzjgIi1NPj2o0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWVnaGFsYXlhdG91/cmlzbS5pbi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wOC9M/YW5kc2NhcGVzLTEu/anBn"
    },
    {
      id: 17,
      name: "Mizoram",
      image: "https://imgs.search.brave.com/lg7Zacxmy_YEw_so9kRf3kt_e-6o6kxwa7OpyJdaS3U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2M1L1ZhbnRhd25n/X0toYXdodGhsYS5q/cGc"
    },
    {
      id: 18,
      name: "Nagaland",
      image: "https://imgs.search.brave.com/ARl5Uje66Ikckzf9-xXFeyEObs82hVS64TBvYcruGGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmF0aW9uc29ubGlu/ZS5vcmcvZ2FsbGVy/eS9JbmRpYS9Ib3Ju/YmlsbC1GZXN0aXZh/bC1OYWdhbGFuZC5q/cGc"
    },
    {
      id: 19,
      name: "Odisha",
      image: "https://imgs.search.brave.com/xiyr-KAYX4A27YUVdEwcg9O85mXqSjqXD94eJRINIKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/OTAyMjEwMi9waG90/by9jaGFyaW90LXdo/ZWVsLWZyb20ta29u/YXJrLXN1bi10ZW1w/bGUtb2Rpc2hhLWlu/ZGlhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1iYU5CdHJo/bTQ1SXNwVUNLM0dC/SFhjNnNteGZWU04y/dDFQaFBzckpPbUFr/PQ"
    },
    {
      id: 20,
      name: "Punjab",
      image: "https://imgs.search.brave.com/9vrVaA3tGP-ixPVO5fJruHPtm_DTLJN5Rvfrr-gIs7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMyLzU1Lzgy/LzM2MF9GXzYzMjU1/ODI5MV9vc0lVM1hJ/RERXbmFqUzVmTG1n/RE1XQ2c0dE1mcGpE/MC5qcGc"
    },
    {
      id: 21,
      name: "Rajasthan",
      image: "https://imgs.search.brave.com/M8tB_qqU1cyF2z7APSlLR_0qjhHr4qV_NNqpW6G31vA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjQ1/MDk2NjE0L3Bob3Rv/L2luZGlhLXJhamFz/dGhhbi1yYWJhcmkt/dmlsbGFnZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TVhT/NjBBbzVaRUZEUjVw/aTJyRmhVczZUT05B/dnJCcko0R2MyU1Qx/X1JDdz0"
    },
    {
      id: 22,
      name: "Sikkim",
      image: "https://imgs.search.brave.com/KYVx9kpKfmR1v4TJqHVM9770CCxj4E_S5iPk3qQgYHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/LzIzMTAwNDE0NTA1/OC0wMi1zaWtraW0t/Zmxvb2QtZXh0cmEu/anBnP3E9d18xMTEw/LGNfZmlsbA"
    },
    {
      id: 23,
      name: "Tamil Nadu",
      image: "https://imgs.search.brave.com/V1xT0-5tjr4VuhA034ySHENjvo0mm5MMw7lU7JrdDfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/NjM1NTc3NS9waG90/by9rYW55YWt1bWFy/aS10YW1pbC1uYWR1/LWluZGlhLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1pU29k/SlFXX0k4anNfX0tT/aml4V19OclpVOE9k/V0VVWi1jakZRZ2xn/Y284PQ"
    },
    {
      id: 24,
      name: "Telangana",
      image: "https://imgs.search.brave.com/hpqy0Xi6tvvMInREv2PlKL-_HG6WRvjHa6RpIEHLU-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FkL0FfdG9yYW5h/LF9nYXRlX3RvX3Nh/Y3JlZF9wcmVjaW5j/dCxfV2FyYW5nYWxf/Rm9ydF9QYXJrX2Fu/ZF9NdXNldW0sX1Rl/bGFuZ2FuYSxfSW5k/aWFfLV83LmpwZw"
    },
    {
      id: 25,
      name: "Tripura",
      image: "https://imgs.search.brave.com/_jBIHd6IF3G6T7eokACqftG479kqahiGEYDXXQ8FoL4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9qYWdhbm5hdGgt/dGVtcGxlLWFnYXJ0/YWxhLXRyaXB1cmEt/Mi1hdHRyLWhlcm8_/cWx0PTgyJnRzPTE3/MjY2NTEwODIxOTU"
    },
    {
      id: 26,
      name: "Uttar Pradesh",
      image: "https://imgs.search.brave.com/0BRT1zfNb_LAjjXuYhI_kVmJFxKBcSIrdHXzVL3QkiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5p/bmRpYS5jb20vdHJh/dmVsL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAzL1V0dGFy/LVByYWRlc2gtcGhv/dG8tMi5qcGc"
    },
    {
      id: 27,
      name: "Uttarakhand",
      image: "https://imgs.search.brave.com/SyNkw3NJg7HOyvCqAKSuTDuGcZJJEX3w1XfYlmfRiLU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/ODE3OTY0NS9waG90/by9kaGFuYXVsdGkt/bXVzc29vcmllLWEt/cXVlZW4tb2YtaGls/bHMtdXR0YXJha2hh/bmQtaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU10/RGp6empQNzZDSW94/aGZjLTFzQUJwMWNW/cjRTS2tmMFpCZk5T/c1NkaVU9"
    },
    {
      id: 28,
      name: "West Bengal",
      image: "https://imgs.search.brave.com/_jAwECksvsLvmSM12tL09OU0nzSJCu5bUAOlfLCVsJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQ5L1BhbnRoZXJh/X3RpZ3Jpc190aWdy/aXMuanBn"
    }
  ];  
  getstates()
  {
    return this.district;
  }
  getstatesbyid(id:any)
  {
    return this.district.find(district => district.id == id)
  }
}
