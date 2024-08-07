import { newSpecPage } from '@stencil/core/testing';
import { AmalitechDatePicker } from '../amalitech-date-picker';

describe('amalitech-dta-picker', () => {
  it('renders with value', async () => {
    const page = await newSpecPage({
      components: [AmalitechDatePicker],
      html: `<amalitech-date-picker value="2018-05-16"></amalitech-date-picker>`,
    });
    expect(page.root).toEqualHtml(`
        <amalitech-date-picker value="2018-05-16" tabindex="0">
        <mock:shadow-root>
          <header>
            <section id="panel" class="" aria-haspopup="dialog"
              aria-expanded="false"
              aria-label="Pick a Date"
              aria-controls="calendar-0"
            >
              <div class="icon-right">
                2018-05-16
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z"
                      stroke="#667185"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path d="M10.6666 1.33325V3.99992" stroke="#667185" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.33337 1.33325V3.99992" stroke="#667185" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M2 6.66675H14" stroke="#667185" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
              </div>
            </section>
          </header>
          <section id="calendar-0" class="calendar" role="dialog">
          <header>
            <div class="texts">
              <span class="wrapper">
                <h1 aria-haspopup="dialog" tabindex="-1">
                  May
                  <span
                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M1.87638 6.31888L7.08614 11.2222C7.59954 11.7054 8.40038 11.7054 8.91378 11.2222L14.1235 6.31888C14.3917 6.06654 14.4044 5.64462 14.1521 5.37651C13.8997 5.10839 13.4778 5.09561 13.2097 5.34795L7.99996 10.2513L2.7902 5.34795C2.52209 5.09561 2.10017 5.10839 1.84783 5.37651C1.59548 5.64462 1.60827 6.06654 1.87638 6.31888Z"
                        fill="#F56630"
                      ></path></svg
                  ></span>
                </h1>
                <div class="months dropdown" role="dialog">
                  <summary>
                    <p class="">January</p>
                    <p class="">February</p>
                    <p class="">March</p>
                    <p class="">April</p>
                    <p class="active">May</p>
                    <p class="">June</p>
                    <p class="">July</p>
                    <p class="">August</p>
                    <p class="">September</p>
                    <p class="">October</p>
                    <p class="">November</p>
                    <p class="">December</p>
                  </summary>
                </div></span>
                <span class="wrapper">
                <h1 aria-haspopup="dialog" tabindex="-1">
                  2018<span
                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M1.87638 6.31888L7.08614 11.2222C7.59954 11.7054 8.40038 11.7054 8.91378 11.2222L14.1235 6.31888C14.3917 6.06654 14.4044 5.64462 14.1521 5.37651C13.8997 5.10839 13.4778 5.09561 13.2097 5.34795L7.99996 10.2513L2.7902 5.34795C2.52209 5.09561 2.10017 5.10839 1.84783 5.37651C1.59548 5.64462 1.60827 6.06654 1.87638 6.31888Z"
                        fill="#F56630"
                      ></path></svg
                  ></span>
                </h1>
                <div class="years dropdown">
                <summary>
                  <p class="">1918</p>
                  <p class="">1919</p>
                  <p class="">1920</p>
                  <p class="">1921</p>
                  <p class="">1922</p>
                  <p class="">1923</p>
                  <p class="">1924</p>
                  <p class="">1925</p>
                  <p class="">1926</p>
                  <p class="">1927</p>
                  <p class="">1928</p>
                  <p class="">1929</p>
                  <p class="">1930</p>
                  <p class="">1931</p>
                  <p class="">1932</p>
                  <p class="">1933</p>
                  <p class="">1934</p>
                  <p class="">1935</p>
                  <p class="">1936</p>
                  <p class="">1937</p>
                  <p class="">1938</p>
                  <p class="">1939</p>
                  <p class="">1940</p>
                  <p class="">1941</p>
                  <p class="">1942</p>
                  <p class="">1943</p>
                  <p class="">1944</p>
                  <p class="">1945</p>
                  <p class="">1946</p>
                  <p class="">1947</p>
                  <p class="">1948</p>
                  <p class="">1949</p>
                  <p class="">1950</p>
                  <p class="">1951</p>
                  <p class="">1952</p>
                  <p class="">1953</p>
                  <p class="">1954</p>
                  <p class="">1955</p>
                  <p class="">1956</p>
                  <p class="">1957</p>
                  <p class="">1958</p>
                  <p class="">1959</p>
                  <p class="">1960</p>
                  <p class="">1961</p>
                  <p class="">1962</p>
                  <p class="">1963</p>
                  <p class="">1964</p>
                  <p class="">1965</p>
                  <p class="">1966</p>
                  <p class="">1967</p>
                  <p class="">1968</p>
                  <p class="">1969</p>
                  <p class="">1970</p>
                  <p class="">1971</p>
                  <p class="">1972</p>
                  <p class="">1973</p>
                  <p class="">1974</p>
                  <p class="">1975</p>
                  <p class="">1976</p>
                  <p class="">1977</p>
                  <p class="">1978</p>
                  <p class="">1979</p>
                  <p class="">1980</p>
                  <p class="">1981</p>
                  <p class="">1982</p>
                  <p class="">1983</p>
                  <p class="">1984</p>
                  <p class="">1985</p>
                  <p class="">1986</p>
                  <p class="">1987</p>
                  <p class="">1988</p>
                  <p class="">1989</p>
                  <p class="">1990</p>
                  <p class="">1991</p>
                  <p class="">1992</p>
                  <p class="">1993</p>
                  <p class="">1994</p>
                  <p class="">1995</p>
                  <p class="">1996</p>
                  <p class="">1997</p>
                  <p class="">1998</p>
                  <p class="">1999</p>
                  <p class="">2000</p>
                  <p class="">2001</p>
                  <p class="">2002</p>
                  <p class="">2003</p>
                  <p class="">2004</p>
                  <p class="">2005</p>
                  <p class="">2006</p>
                  <p class="">2007</p>
                  <p class="">2008</p>
                  <p class="">2009</p>
                  <p class="">2010</p>
                  <p class="">2011</p>
                  <p class="">2012</p>
                  <p class="">2013</p>
                  <p class="">2014</p>
                  <p class="">2015</p>
                  <p class="">2016</p>
                  <p class="">2017</p>
                  <p class="active">2018</p>
                  <p class="">2019</p>
                  <p class="">2020</p>
                  <p class="">2021</p>
                  <p class="">2022</p>
                  <p class="">2023</p>
                  <p class="">2024</p>
                  <p class="">2025</p>
                  <p class="">2026</p>
                  <p class="">2027</p>
                  <p class="">2028</p>
                  <p class="">2029</p>
                  <p class="">2030</p>
                  <p class="">2031</p>
                  <p class="">2032</p>
                  <p class="">2033</p>
                  <p class="">2034</p>
                  <p class="">2035</p>
                  <p class="">2036</p>
                  <p class="">2037</p>
                  <p class="">2038</p>
                  <p class="">2039</p>
                  <p class="">2040</p>
                  <p class="">2041</p>
                  <p class="">2042</p>
                  <p class="">2043</p>
                  <p class="">2044</p>
                  <p class="">2045</p>
                  <p class="">2046</p>
                  <p class="">2047</p>
                  <p class="">2048</p>
                  <p class="">2049</p>
                  <p class="">2050</p>
                  <p class="">2051</p>
                  <p class="">2052</p>
                  <p class="">2053</p>
                  <p class="">2054</p>
                  <p class="">2055</p>
                  <p class="">2056</p>
                  <p class="">2057</p>
                  <p class="">2058</p>
                  <p class="">2059</p>
                  <p class="">2060</p>
                  <p class="">2061</p>
                  <p class="">2062</p>
                  <p class="">2063</p>
                  <p class="">2064</p>
                  <p class="">2065</p>
                  <p class="">2066</p>
                  <p class="">2067</p>
                  <p class="">2068</p>
                  <p class="">2069</p>
                  <p class="">2070</p>
                  <p class="">2071</p>
                  <p class="">2072</p>
                  <p class="">2073</p>
                  <p class="">2074</p>
                  <p class="">2075</p>
                  <p class="">2076</p>
                  <p class="">2077</p>
                  <p class="">2078</p>
                  <p class="">2079</p>
                  <p class="">2080</p>
                  <p class="">2081</p>
                  <p class="">2082</p>
                  <p class="">2083</p>
                  <p class="">2084</p>
                  <p class="">2085</p>
                  <p class="">2086</p>
                  <p class="">2087</p>
                  <p class="">2088</p>
                  <p class="">2089</p>
                  <p class="">2090</p>
                  <p class="">2091</p>
                  <p class="">2092</p>
                  <p class="">2093</p>
                  <p class="">2094</p>
                  <p class="">2095</p>
                  <p class="">2096</p>
                  <p class="">2097</p>
                  <p class="">2098</p>
                  <p class="">2099</p>
                  <p class="">2100</p>
                  <p class="">2101</p>
                  <p class="">2102</p>
                  <p class="">2103</p>
                  <p class="">2104</p>
                  <p class="">2105</p>
                  <p class="">2106</p>
                  <p class="">2107</p>
                  <p class="">2108</p>
                  <p class="">2109</p>
                  <p class="">2110</p>
                  <p class="">2111</p>
                  <p class="">2112</p>
                  <p class="">2113</p>
                  <p class="">2114</p>
                  <p class="">2115</p>
                  <p class="">2116</p>
                  <p class="">2117</p>
                </summary>
                </div></span
              >
            </div>
            <div class="buttons">
              <button type="button" title="previous" tabindex="-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M6.59729 11.6422C5.99329 11.0004 5.99329 9.9994 6.59729 9.35765L12.7264 2.84545C13.0418 2.51031 13.5692 2.49432 13.9044 2.80975C14.2395 3.12518 14.2555 3.65258 13.9401 3.98773L7.81095 10.4999L13.9401 17.0121C14.2555 17.3473 14.2395 17.8747 13.9044 18.1901C13.5692 18.5055 13.0418 18.4895 12.7264 18.1544L6.59729 11.6422Z"
                    fill="#F56630"
                  ></path>
                </svg></button>     
                <button type="button" title="next" tabindex="-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M13.4025 11.6422C14.0065 11.0004 14.0065 9.9994 13.4025 9.35765L7.27342 2.84545C6.95799 2.51031 6.4306 2.49432 6.09545 2.80975C5.76031 3.12518 5.74432 3.65258 6.05975 3.98773L12.1889 10.4999L6.05975 17.0121C5.74432 17.3473 5.76031 17.8747 6.09545 18.1901C6.4306 18.5055 6.95799 18.4895 7.27342 18.1544L13.4025 11.6422Z"
                    fill="#F56630"
                  ></path>
                </svg>
              </button>
            </div>
          </header>
          <header><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span></header>
          <main>
            <button tabindex="-1" class="date not-current-month" type="button">30</button><button tabindex="-1" class="date" type="button">1</button><button tabindex="-1" class="date" type="button">2</button
            ><button tabindex="-1" class="date" type="button">3</button><button tabindex="-1" class="date" type="button">4</button><button tabindex="-1" class="date" type="button">5</button
            ><button tabindex="-1" class="date" type="button">6</button><button tabindex="-1" class="date" type="button">7</button><button tabindex="-1" class="date" type="button">8</button
            ><button tabindex="-1" class="date" type="button">9</button><button tabindex="-1" class="date" type="button">10</button><button tabindex="-1" class="date" type="button">11</button
            ><button tabindex="-1" class="date" type="button">12</button><button tabindex="-1" class="date" type="button">13</button><button tabindex="-1" class="date" type="button">14</button
            ><button tabindex="-1" class="date" type="button">15</button><button tabindex="-1" class="date selected" type="button">16</button><button tabindex="-1" class="date" type="button">17</button
            ><button tabindex="-1" class="date" type="button">18</button><button tabindex="-1" class="date" type="button">19</button><button tabindex="-1" class="date" type="button">20</button
            ><button tabindex="-1" class="date" type="button">21</button><button tabindex="-1" class="date" type="button">22</button><button tabindex="-1" class="date" type="button">23</button
            ><button tabindex="-1" class="date" type="button">24</button><button tabindex="-1" class="date" type="button">25</button><button tabindex="-1" class="date" type="button">26</button
            ><button tabindex="-1" class="date" type="button">27</button><button tabindex="-1" class="date" type="button">28</button><button tabindex="-1" class="date" type="button">29</button
            ><button tabindex="-1" class="date" type="button">30</button><button tabindex="-1" class="date" type="button">31</button><button tabindex="-1" class="date not-current-month" type="button">1</button
            ><button tabindex="-1" class="date not-current-month" type="button">2</button><button tabindex="-1" class="date not-current-month" type="button">3</button
            ><button tabindex="-1" class="date not-current-month" type="button">4</button><button tabindex="-1" class="date not-current-month" type="button">5</button
            ><button tabindex="-1" class="date not-current-month" type="button">6</button><button tabindex="-1" class="date not-current-month" type="button">7</button
            ><button tabindex="-1" class="date not-current-month" type="button">8</button><button tabindex="-1" class="date not-current-month" type="button">9</button
            ><button tabindex="-1" class="date not-current-month" type="button">10</button>
          </main>
          <footer>
            <button type="button" tabindex="-1">Today</button>
            <div>
             <button type="button" tabindex="-1">Cancel</button>
             <button type="submit" tabindex="-1">Ok</button>
            </div>
          </footer>
        </section>
        </mock:shadow-root>
      </amalitech-date-picker>
    `);
  });
});
