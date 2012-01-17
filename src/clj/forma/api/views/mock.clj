(ns forma.api.views.mock)

(defn countries-from-elephantdb
  "Stub for a function that pulls country deforestation aggregates from
  ElephantDB."
  []
  {:countries {:brazil {:index 5
                        :iso "BRA"
                        :name "Brazil"}
               :indonesia {:index 4
                           :iso "IDN"
                           :name "Indonesia"}
               :malaysia {:index 4
                          :iso "MYS"
                          :name "Malaysia"}}
   :start {:year 2012 :month 1}
   :end {:year 2012 :month 1}})

(def countries
  {:countries {:brazil 1 :indonesia 1 :malaysia 3}
   :period {:year 2012 :month 1}})

(def country-level-data 
  {:idn
   {:name "Indonesia"
    :admin_level 0
    :start {:year 2006 :month 1}
    :end {:year 2011 :month 12}
    :index [38 32 26 70 26 71 7 68 59 88 90 75 73 73 87 74 87 78 47 35 8 12 14 61 57 27 97 29 38 70 10 40 57 96 20 30 63 28 84 54 90 47 78 9 72 63 87 95 39 91 93 35 33 20 80 98 61 13 72 74 36 99 58 52 79 93 57 45 43 37 64 68]}
   :bra
   {:name "Brazil"
    :admin_level 0
    :start {:year 2006 :month 1}
    :end {:year 2011 :month 12}
    :index (reverse [38 32 26 70 26 71 7 68 59 88 90 75 73 73 87 74 87 78 47 35 8 12 14 61 57 27 97 29 38 70 10 40 57 96 20 30 63 28 84 54 90 47 78 9 72 63 87 95 39 91 93 35 33 20 80 98 61 13 72 74 36 99 58 52 79 93 57 45 43 37 64 68])}
   :mys
   {:name "Malaysia"
    :admin_level 0
    :start {:year 2006 :month 1}
    :end {:year 2011 :month 12}
    :index (shuffle [38 32 26 70 26 71 7 68 59 88 90 75 73 73 87 74 87 78 47 35 8 12 14 61 57 27 97 29 38 70 10 40 57 96 20 30 63 28 84 54 90 47 78 9 72 63 87 95 39 91 93 35 33 20 80 98 61 13 72 74 36 99 58 52 79 93 57 45 43 37 64 68])}})


(def province-level-data
  {:idn
   {:provinces
    {:1285
     {:id1 1285
      :name "Sumatera Utara"
      :index 5}
      :1286
     {:id1 1286
      :name "Yogyakarta"
      :index 10}}
    :iso "IDN"
    :admin_level 1
    :start {:year 2011 :month 12}
    :end {:year 2011 :month 12}}
   :bra
   {:provinces
    {:430
     {:id1 430
      :name "Acre"
      :index 50}}
    :431
     {:id1 431
      :name "Alagoas"
      :index 50}
    :iso "BRA"
    :admin_level 1
    :start {:year 2011 :month 12}
    :end {:year 2011 :month 12}}
   :mys
   {:provinces
    {:1989
     {:id1 1989
      :name "Sarawak"
      :index 13}
     :1990
     {:id1 1990
      :name "Selangor"
      :index 27}}
    :iso "MYS"
    :admin_level 1
    :start {:year 2011 :month 12}
    :end {:year 2011 :month 12}}})

(def province-level-timeseries
  {:idn
   {:provinces
    {:1285
     {:id1 1285
      :name "Sumatera Utara"
      :index (shuffle [38 32 26 70 26 71 7 68 59 88 90 75 73 73 87 74 87 78 47 35 8 12 14 61 57 27 97 29 38 70 10 40 57 96 20 30 63 28 84 54 90 47 78 9 72 63 87 95 39 91 93 35 33 20 80 98 61 13 72 74 36 99 58 52 79 93 57 45 43 37 64 68])
      :iso "IDN"
      :admin_level 1
      :start {:year 2006 :month 1}
      :end {:year 2011 :month 12}}
     :1286
     {:id1 1286
      :name "Yogyakarta"
      :index [38 32 26 70 26 71 7 68 59 88 90 75 73 73 87 74 87 78 47 35 8 12 14 61 57 27 97 29 38 70 10 40 57 96 20 30 63 28 84 54 90 47 78 9 72 63 87 95 39 91 93 35 33 20 80 98 61 13 72 74 36 99 58 52 79 93 57 45 43 37 64 68]
      :iso "IDN"
      :admin_level 1
      :start {:year 2006 :month 1}
      :end {:year 2011 :month 12}}}}
     })