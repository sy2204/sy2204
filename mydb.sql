PGDMP  	    /                |         	   search_db    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    23969 	   search_db    DATABASE     �   CREATE DATABASE search_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Chinese (Simplified)_China.936';
    DROP DATABASE search_db;
                postgres    false            �            1259    23986    flmc    TABLE     �   CREATE TABLE public.flmc (
    id integer NOT NULL,
    flmc_text character varying(255) NOT NULL,
    flmc_count integer NOT NULL
);
    DROP TABLE public.flmc;
       public         heap    postgres    false            �            1259    23985    flmc_id_seq    SEQUENCE     �   CREATE SEQUENCE public.flmc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.flmc_id_seq;
       public          postgres    false    218                        0    0    flmc_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.flmc_id_seq OWNED BY public.flmc.id;
          public          postgres    false    217            �            1259    23993    points    TABLE     �   CREATE TABLE public.points (
    id integer NOT NULL,
    point_name character varying(255) NOT NULL,
    point_meaning character varying(255),
    latitude double precision NOT NULL,
    longitude double precision NOT NULL
);
    DROP TABLE public.points;
       public         heap    postgres    false            �            1259    23992    points_id_seq    SEQUENCE     �   CREATE SEQUENCE public.points_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.points_id_seq;
       public          postgres    false    220                       0    0    points_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.points_id_seq OWNED BY public.points.id;
          public          postgres    false    219            �            1259    23971    query_history    TABLE     �   CREATE TABLE public.query_history (
    id integer NOT NULL,
    query_text character varying(255),
    query_count integer DEFAULT 1
);
 !   DROP TABLE public.query_history;
       public         heap    postgres    false            �            1259    23970    query_history_id_seq    SEQUENCE     �   CREATE SEQUENCE public.query_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.query_history_id_seq;
       public          postgres    false    216                       0    0    query_history_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.query_history_id_seq OWNED BY public.query_history.id;
          public          postgres    false    215            ]           2604    23989    flmc id    DEFAULT     b   ALTER TABLE ONLY public.flmc ALTER COLUMN id SET DEFAULT nextval('public.flmc_id_seq'::regclass);
 6   ALTER TABLE public.flmc ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            ^           2604    23996 	   points id    DEFAULT     f   ALTER TABLE ONLY public.points ALTER COLUMN id SET DEFAULT nextval('public.points_id_seq'::regclass);
 8   ALTER TABLE public.points ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            [           2604    23974    query_history id    DEFAULT     t   ALTER TABLE ONLY public.query_history ALTER COLUMN id SET DEFAULT nextval('public.query_history_id_seq'::regclass);
 ?   ALTER TABLE public.query_history ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    23986    flmc 
   TABLE DATA           9   COPY public.flmc (id, flmc_text, flmc_count) FROM stdin;
    public          postgres    false    218   �       �          0    23993    points 
   TABLE DATA           T   COPY public.points (id, point_name, point_meaning, latitude, longitude) FROM stdin;
    public          postgres    false    220   /       �          0    23971    query_history 
   TABLE DATA           D   COPY public.query_history (id, query_text, query_count) FROM stdin;
    public          postgres    false    216   I7                  0    0    flmc_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.flmc_id_seq', 9, true);
          public          postgres    false    217                       0    0    points_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.points_id_seq', 334, true);
          public          postgres    false    219                       0    0    query_history_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.query_history_id_seq', 11, true);
          public          postgres    false    215            b           2606    23991    flmc flmc_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.flmc
    ADD CONSTRAINT flmc_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.flmc DROP CONSTRAINT flmc_pkey;
       public            postgres    false    218            d           2606    24000    points points_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.points
    ADD CONSTRAINT points_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.points DROP CONSTRAINT points_pkey;
       public            postgres    false    220            `           2606    23977     query_history query_history_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.query_history
    ADD CONSTRAINT query_history_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.query_history DROP CONSTRAINT query_history_pkey;
       public            postgres    false    216            �   �   x�3�|:{ߓ��^.k�4�2�|ڳ���E��\ƜO�.{>e��u�_t�r�r�p>���s%H�1�!����.h2M9�M�	T�l��� }@#�v�{ں$f�e��lZ��������d���=���1F��� �wAO      �      x�m��5IQ�O_QY�/F�@Q	�C����H�!�An��s��-���;kUu�0��^�����ӛ��}��/�������_�}����>���oƏR�Jɩ�b��>z��,%���OȥT�����H�B+-���R��\[c��a�e o����F��U�QR�������@���@�-�ԫe+�
9��^Ӱ؎h/u3P�W��*�[0qH-�bh51�>߶Ϸ�X��������Y�����e�o���ZX���-�j5+�\��䗁��O�����,�&�Bk��{������ |��b�5�`���1a5��*�P��0߇ʚ�^��Dd�h%�&G\P��E{���n�%={���2X�[�����h�z���f�G�O5�0����h�VRȽט�nV-D�#Ԑ���h;�v	�%ٰd���V،���H��#i��F���m�^
vr<���Tڅ%��э�1�R��B��X���K�~���0sL/	������pi;�6.�E�����ܳ��Y
,,dƝ�x�R��2�2��b��z�H�q3:����A-̵�Y��J`!V'y󒗛�<t�g��}L�!Ɓ�1�XȌ;��"s���N�y��#p:s�ca!3�d�|�i�Ɠ�{�a 1�� 3/dƝ�x��*ֈ��1T�PV8�-���w2�E&P��}C��������w0�f㇃�8؃�=F�U�Ro�`w,c���jd?ڌ9����^z?��eܹ�c�F��x_|5���G^�L;�)\oQXv��[5��J�0��#/\���d��	�;��w�hG��P�<ÂeڱL�����i��[�^���F�[���l��Xq��mỤ =n���i�2]\���V�%��	�G8/e�2�\��K�g�=���s�	��QIye�2�\&��|����G�hD����GY�L;��]�צ�9�D�HX�	ﱐ�v2��0-,S�@�"�,t�̔�̴��&�`qeD�Ȫ��nGY��;��r�&�Kn��#C)2['��ͼ��͟B	O�9Y�^gsa3�l�+�����g���Tr@@���ͼ��=�s�GB��Q�qge#e�-o�e�8J�f�(��
\�p�fG]��;���KI~�����K '�r9��f����3���q1���AF@ �<��f�����:Q��M82O�x��.l���=?���<�>�4�C���8�f���̻� �a R��d%3ϰ�Yv2K�s~:,V�t9��.h�0G]�,;�Ń9�3F|B�>�3�� u!��d��Le�x�8f�!�QF�Q2�Nfq���n��Bs��� �*���̲�Y.�IB�aAe� 
�m�{n����)���3+!M �gP;�Bf��,��bTy�:ӫ�cǋ�(G[�,;��y�A�ov�����b`��\�~WE���Z����dy�h�e�,>�ح��;�����t�(�Bf�ɬ��A��^�  ,�E�r��̺�Y=�'�]�T)�q�J�հq��̺�Y� �V�y\Ŭ�2�˹��-d֝�z��;��Z�k)b��f�	|��2�Nf�|fP;�B���0"Z��L���eݹ��e%p{T,�3��{"���kE~+ɝKcqE�	�����c�0�f��O�(	��&"ߕv}A��hV���1���p�o�-�E4�f���tCʕ����߁?�Bf��l�3���2f�I�����1���v4�;M
6\.Q���LM���X�l;��S�p��g�:鶤ğW�Ăf��l�y�3)|��Q�lS8&�Ͷ�ټ"Ol1���������cA��h�r�1�;������Fqu��̶�ٜL��n��%A�����C���[���LN��z3z�%�LVr��̶�ټ2O<j-M/N�����m'�_
��0%v�_ED��P��;�كb�f��m3�.{L�ę�Ăf������d�Y���K�&4��f�hf~��R���5�hY����w4��5��wj����:-�ۥʎ���w4���(��Z1�����4����.[L�pv�Ω��g�L���Fk�X��;��^[ҪB2�q�λ�%G�/:6>��g��fP^�6�󬓨��{�X�������'g=ث���O�c�U@�h��Nm�L��ߣ�i=���t!t섎��X8���
q�(T�jSy������B�v�)gc�oc{36F����j�v���@��Qd).�"
�/;��[�l!�S?S_bSTϓ5�z,��������d���J����Z�0[(;�ã{�j6���z��T�2���B��)�D��B$�̖;�&FQ�`�P:vJ��Ec��V���j����r�l�t�w��|�H��[+���bcm��z�ӏR�Ͷ��4b~һl��{��])����p�(�!�z@���pk���R"��90���#�ɰc�XY���ֆ�P��Ta��q!D�>HYtvWQ����LD+�u>6�!zX��;e�Ň[3>�W�葚��Lmf�늯.Z�Uz9���R;K������O��(�kՈ^.��x��#μXM��H갲6�í+��ٔ����c&�;�Q����ږ��|�	f��]X����q�Y;��֚�_����U�H��ldd����p$���A~e�dC�($��)Gw��r��W�5}�eJD���m��]=r��w�Q�΂��	]T�6������t)H[~3�����r�k��ϊ�]C2o�f5H�_�e���_�,�m*�]F�t�������l��pf:KXY��+I����{ᥠ�r�}'���ۻ�d�̷�jR�ڒ�\�$w���z�Jl��#��">N��;�0�IJwM��S�c_H����9H��VY�n��Eo�W5��jj�YNPK�1���ܛ�d..��8�$�u��z�J�<�ai�=���l��N%6S���QY�����&�� (jI��.K�q9����D&��1�)��M�H[���e���3�%4�p	�;�+�(��
MvS�,z.[J2��R+6��/j��6ٔ�8l����g��֐�IW����$'��K�{�'=K�����w�V��n��]���3*�Ijg|�� ^A���h%��<Yr���E��9�UrUB����ړ��'K�PmbC-��*�#U��_�'��O���:�(��e(�J�Z�
y��7�<�h���-��LA��*B�M����&�SV���S:��:�eYu(�	Q��L[���8?�'�@��>�R�ݴ(��(N]��H �e��>WI�T2�j���(s=�R�B5@u+)h���T�^)�IR65��.
��,G>���ml���4)K��O�YŬ�>K1b�%%VVno��e��C���������r,�,e7]�������z��J��b��4e7m�\��$m!3!l��R�8��Sv��l�S<��Z�Dr#�Kee7�ϛx�U1�C�;���,`T
���4*ˎm�"�*���"�G��DXY���T6u*^��e�e(���Y�U���Re.U�U�����T]� i��ѫXe7�ʲ;�|
�Xw�����DD����+s�*�EQTf�%���{�	�fe7�ʊ�ƨ�+:�gK��O5-�J�M��K���E��X�E�?�}��J�M���j$�-+'�aH�u�L��U���ze._u�}��X_c=�|Z��*_�M��)`e�)���^b�Ұ�9�m�R�Q)�yE|ZV���*𰤰"���XvS��e,�V��0��,���ܶ
YvS�lJYM����T'�WT�<�j���,�z�ƊȵY�<W����s)&����-+\��HQ���`�I��u�B+�7M˪O�U��(�}
1u��d 8�Uֲ��e��_8�J)C�;g8�]��&vlU��&m�k[d�o�!�9%Ɋ`T���J�Mݲ�fւ{5�z����(����7Zѽ	\�
W�ڐvv}������&�[E.��\V�0�&ㆴ��g���'���6�w��In�;U|u�)�6W[VVtoZ�U w����7BAN벪]v���һ�����q��4jx%�&x�+^�̔���Y���A�FVro����Օ���,7��qW
�v>�J�M��6;�J�U�   0�FIk�sqW��nʗ��E�cc��cM9p.�JU�j_v��y?��)k·z
#`{�J��\�/��_�X�.��%ӝ��v�p�*[50��`�f�˖Rx�i�]�r<��`d����aQb���f���B��c�Q�����$��l��v�=�F����{S�l�a��r��S�N��]-�J�M���q��Sm���P���td?�"f7I��,����g���ҹ�z��ܛ*f.��@l
�S�A�HR���Xu1�	c�ʘ�5I-�2;b��&Qgj�*cv�Ƭ���~��e�t�M��'r+�7u̺w��R�|�K
��"i� W}�n�]
Y>�U�q�Fw�5'���J�M"���6��K\b�f�G�q���&���d��z$��l�E8O�ϲX�'�g���e4�<ߢv�����ce%���Y��-j�|��=��/�F�ʊ�M+�15�4�R_�YQ%U3�q�즖�pE7���5�5g 5lE6��++�7��\0�hl��^���P%,5dhYVto���Y�)�P��y����*���{��lx����))�z�VW� ��8⪙�M4���C���ШC���d#G\E3��f6���&�(���Y:'��$P��ܛnfc6���/B��	
�����ܛrf.�%{���z�J6�,��1��'/3�?]v���b�Ǽ�VM�W6��;i��v�q!A� 7�᫜���rk;����N��I�uˋ���ň�K�ĉ����w;���вF|����&�)�{�N�씻�+�T�R��od�����̴�L������˙��4�LU���q�f���\�zhD1���[��5��)1�������3-Q�x+�:@'�_�,5�3�nf
X�ր�Ϻ�tY�;�q<p������a�����DQ�Uz��a,�p~���9?S�����!� �$윯��l�]�R���g�*DUrTdg��@���I<���Τ&��x?��Z��h{ ����1�������Û�i{@}	[Q�w�
��gg�W����i��\�����$���f�@�0N�yhrd3� {ޖb�%�����Lд�y��P�o3�@�%.��4ء��2d,���
��pۃ�ywJ���>IrۙBZ�v���K�b�8��6�~�%vlH����Nw|�}�]l�f��)��zG)�A�����_��>D��x��[P��ug��x�ޮy)u"U&�z΂+���Aug��x�ޗ��H�x*�D�Į�nݼ�������ů~N_iV}N���0OD��Ҏw|��
��{� ����W2Mr�������R������B�o��W͐�u���,= ��0M�sT(�[~�q���q��Xw��pWÒZ���$q�i��⓹�wu'<=��XJ�9���fEu�QWx�����.e�e�Y{���۸�����;��A�kcju l�U���ó'�-%y�$�����ip�H��~M=��xz0�W���rJ�6;�ľ�K�h�v�Ӄ�p�Wc��I�	��US�Sw�Ӄq��Ʃ�k<�5Q�tO����3��'��`�ۘ���`QOK;����kfU2���)>�|ސ&��x�O�/�,�h�֖$�^�*QW�t�/�v��q�ե���4kuz:�.PN�)K,��㗆v&l���$�%�G�;g\b���]G�	!�3#^��	Yh;��A�+iC������τ@�
OUc�[��̻��ߤ��Y�6�)j3��Wj�v���KR+�kQ$�}��_J�VKNk�� ���ȗ*�n�b@e�����ݹ�,=�����eH�}kvL-!������e0��s���f80M���w���Ka+�
[hi�
c�Bڢ	@�|��~7,��(��7��ֱl���i�<���6�w8/!_I�����w�˃oW�H݂������=|9}=���7K�/ɭ�Ƙ�O�9��57�YkJ3=�Nxy�[�dZ��̩%ݩ�'�z�[i��-/N�EA!�KQs?�?�i�< ��[����5\4�r����.�]�#�nD']��u���6�����
UP���Z����b����/��rY�A�&�gӥ��B�z�X�	���3�4%��u7�]�,[幰�^��]3]@�z6�&e�]���+>v��p���o�s�����OWT;��A�KsY9	���9JF�:�7�#���u�'';	�pJA��Ԅ�,����uM#����D���u ��ɳr%)��F�� �����`,���R�y�v��H�a��#���@�o��	9S�t�rs��M�H�v���K��Y2%SC��4f��Q�bh'�=w�n�����������E������7O�y+Rn��tMA���r3����7����[r�\0�&s?i�=��<����U����荍�7��� �E�|v�)��Z,hO+C;������)�k�"�]!�U#�i`hǻ=�v-�J.Β& x��K�L��|������RK�Bt'MNbr��=�$�d6�9�]�+`�6�T �����U���6��y-K�y�$�w�����;Xʬu5��P�"�w�}�{鼤�ɇ9P�SFS+�;��l���曺�lw�3�(�����#w,�p��~N�B�����{�bI8�_�H���p�{p����gw�6�f��l��?�v��������Sh�՟!c�W�؎w�}	~��s�_�~��t�7FLZ����{E�M�W�'�LWs�_ӊ�:���K��������(W	)�|��S��&R�0�-��+������=x�r#%�vWnfq��N�o������x��
�9���GxM\kR2�� .7�|��c��T��,�Y�h�\��˴���=|�׵x^�pr�U�����|��~�.J�m5�^R��\�|�{<�vI��L�hsԘ�B�r�w���=|/0CS3]����h�1Q+�Ў�x�}I����d$�Hmޠ]ܞ����x�}ɃE-%)�-̈Rκ|t�W<�4���3<�uI<eL��(&��BJ��<���s1~~�r�_wx~�D�7�5��?z���|��/���7>��7���?|�������?~�������/��/��]���7~��������~�O?��O����~���������G?����O�z������������?��ܺ`�)��TPϯ�Q�s�ܔ?���~��7����~�����۟|���~��߾}�/~��G����o?�5?��ӯ������o���?����~��w������;?��|�����?|�߼}�?�������_�}�c��O�곟��u�q~c������A���R����q�2�      �   �   x�U�I�PD�Շ16��]<�S!l��.D�C�2�?r�F.+�W���$��-<O}�U�e�Am0���^�w%���lS	�O�}S:��q ��)|�"T:���(��e��@�s��`�H\�C��N%=
L��;j�Iq'_�&��᷃Y�L��Q�C�ȗ3	[o�z��^�nT     